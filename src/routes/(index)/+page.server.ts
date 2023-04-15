import {
    CONTACT_FORM_RECEIVER_MAIL,
    CONTACT_FORM_RECEIVER_NAME,
    CONTACT_FORM_SENDER_MAIL,
    CONTACT_FORM_SENDER_NAME,
} from '$env/static/private';
import { sendMail } from '$lib/mail';
import { subscribeToNewsletter } from '$lib/newsletter';
import { fail } from '@sveltejs/kit';
import { z, type SafeParseReturnType } from 'zod';
import { zfd } from 'zod-form-data';
import type { Actions } from './$types';

const RequestBodySchemaContact = zfd.formData({
    name: z.string().trim().min(1),
    email: z.string().email().trim(),
    subject: z.string().trim().min(1),
    message: z.string().trim().min(1),
    newsletter: z
        .string()
        .optional()
        .transform((x) => x === 'on'),
});
const RequestBodySchemaNewsletter = zfd.formData({
    email: z.string().email().trim(),
    acceptTerms: z.literal('on'),
});

type ResponsePartial = {
    success: boolean;
    data: Record<string, string | boolean | undefined>;
    errors?: Record<string, string[] | undefined>;
};
type Response = {
    contact?: ResponsePartial;
    newsletter?: ResponsePartial;
};

const wrapper = async <T extends Record<string, string | boolean>>(
    request: Request,
    key: keyof Response,
    parser: (formData: FormData) => SafeParseReturnType<FormData, T>,
    handler: (data: T) => Promise<boolean>,
) => {
    const formData = await request.formData();
    const result = parser(formData);

    const response: ResponsePartial = {
        success: false,
        data: Object.fromEntries(
            Array.from(formData.entries()).map(([k, v]) => [k, typeof v === 'string' ? v : undefined]),
        ),
    };

    if (!result.success) {
        response.errors = result.error.flatten().fieldErrors;
        return fail(400, { [key]: response });
    }

    const success = await handler(result.data);

    response.data = result.data;
    if (success) {
        response.success = true;
        return { [key]: response };
    }

    return fail(500, { [key]: response });
};

const handleNewsletterSubscription = async (newsletter: boolean, email: string) => {
    if (!newsletter) {
        return 'nicht abonniert';
    }

    const success = await subscribeToNewsletter(email);

    return success ? 'abbonniert' : 'Abonnieren fehlgeschlagen';
};

export const actions = {
    contact: async ({ request }) => {
        return await wrapper(request, 'contact', RequestBodySchemaContact.safeParse, async (body) => {
            const newsletterResult = await handleNewsletterSubscription(body.newsletter, body.email);

            const emailText = `Name: ${body.name}\nNewsletter: ${newsletterResult}\n\n${body.message}`;

            return await sendMail({
                from: { name: CONTACT_FORM_SENDER_NAME, address: CONTACT_FORM_SENDER_MAIL },
                to: { name: CONTACT_FORM_RECEIVER_NAME, address: CONTACT_FORM_RECEIVER_MAIL },
                replyTo: { name: body.name, address: body.email },
                subject: `Kontaktformular: ${body.subject}`,
                text: emailText,
            });
        });
    },

    newsletter: async ({ request }) => {
        return await wrapper(request, 'newsletter', RequestBodySchemaNewsletter.safeParse, async (body) => {
            return await subscribeToNewsletter(body.email);
        });
    },
} satisfies Actions;
