import {
    CONTACT_FORM_RECEIVER_MAIL,
    CONTACT_FORM_RECEIVER_MAIL_SINGING,
    CONTACT_FORM_RECEIVER_NAME,
    CONTACT_FORM_RECEIVER_NAME_SINGING,
    CONTACT_FORM_SENDER_MAIL,
    CONTACT_FORM_SENDER_NAME,
} from '$env/static/private';
import { sendMail } from '$lib/server/mail';
import { subscribeToNewsletter } from '$lib/server/newsletter';
import { FormId } from '$lib/types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const buildRequiredString = (message: string) => z.string({ required_error: message }).trim().min(1, { message });
const buildRequiredEmail = (message: string) => buildRequiredString(message).email({ message });

const schemaContact = z.object({
    name: buildRequiredString('Bitte trage deinen Namen ein.'),
    email: buildRequiredEmail('Bitte trage deine Email Adresse ein.'),
    subject: buildRequiredString('Bitte wähle einen Betreff aus.'),
    message: buildRequiredString('Bitte trage deinen Nachricht ein.'),
    newsletter: z.boolean(),
});
const schemaNewsletter = z.object({
    email: buildRequiredEmail('Bitte trage deine Email Adresse ein.'),
    acceptTerms: z.literal(true),
});

const handleNewsletterSubscription = async (newsletter: boolean, email: string) => {
    if (!newsletter) {
        return 'nicht abonniert';
    }

    const success = await subscribeToNewsletter(email);

    return success ? 'abbonniert' : 'Abonnieren fehlgeschlagen';
};

export const load = async () => {
    return {
        formContact: superValidate(schemaContact, { id: FormId.contact }),
        formNewsletter: superValidate(schemaNewsletter, { id: FormId.newsletter }),
    };
};

export const actions = {
    contact: async ({ request }) => {
        const form = await superValidate(request, schemaContact, { id: FormId.contact });

        if (!form.valid) {
            return fail(400, { form });
        }

        const { email, message, name, newsletter, subject } = form.data;

        const newsletterResult = await handleNewsletterSubscription(newsletter, email);

        const to =
            subject === 'Mitsingen'
                ? { name: CONTACT_FORM_RECEIVER_NAME_SINGING, address: CONTACT_FORM_RECEIVER_MAIL_SINGING }
                : { name: CONTACT_FORM_RECEIVER_NAME, address: CONTACT_FORM_RECEIVER_MAIL };

        const success = await sendMail({
            from: { name: CONTACT_FORM_SENDER_NAME, address: CONTACT_FORM_SENDER_MAIL },
            to,
            replyTo: { name, address: email },
            subject: `Kontaktformular: ${subject}`,
            text: `Name: ${name}\nNewsletter: ${newsletterResult}\n\n${message}`,
        });

        if (!success) {
            throw new Error('contact action failed');
        }

        return { form };
    },

    newsletter: async ({ request }) => {
        const form = await superValidate(request, schemaNewsletter, { id: FormId.newsletter });

        if (!form.valid) {
            return fail(400, { form });
        }

        const success = await subscribeToNewsletter(form.data.email);

        if (!success) {
            throw new Error('newsletter action failed');
        }

        return { form };
    },
};
