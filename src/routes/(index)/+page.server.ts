import {
    CONTACT_FORM_RECEIVER_MAIL,
    CONTACT_FORM_RECEIVER_MAIL_SINGING,
    CONTACT_FORM_RECEIVER_NAME,
    CONTACT_FORM_RECEIVER_NAME_SINGING,
    CONTACT_FORM_SENDER_MAIL,
    CONTACT_FORM_SENDER_NAME,
} from '$env/static/private';
import { schemaContact, schemaNewsletter } from '$lib/forms.js';
import { sendMail } from '$lib/server/mail';
import { subscribeToNewsletter } from '$lib/server/newsletter';
import { FormId } from '$lib/types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

const handleNewsletterSubscription = async (newsletter: boolean, email: string) => {
    if (!newsletter) {
        return 'nicht abonniert';
    }

    const success = await subscribeToNewsletter(email);

    return success ? 'abbonniert' : 'Abonnieren fehlgeschlagen';
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
