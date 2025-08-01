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
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';

async function handleNewsletterSubscription(newsletter: boolean, email: string) {
    if (!newsletter) {
        return 'nicht abonniert';
    }

    const success = await subscribeToNewsletter(email);

    return success ? 'abbonniert' : 'Abonnieren fehlgeschlagen';
}

export async function load() {
    const [formContact, formNewsletter] = await Promise.all([
        superValidate(zod4(schemaContact)),
        superValidate(zod4(schemaNewsletter)),
    ]);

    return { formContact, formNewsletter };
}

export const actions = {
    async contact({ request }) {
        const formContact = await superValidate(request, zod4(schemaContact));

        if (!formContact.valid) {
            return fail(400, { formContact });
        }

        const { email, message, name, newsletter, subject } = formContact.data;

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

        return { formContact };
    },

    async newsletter({ request }) {
        const formNewsletter = await superValidate(request, zod4(schemaNewsletter));

        if (!formNewsletter.valid) {
            return fail(400, { formNewsletter });
        }

        const success = await subscribeToNewsletter(formNewsletter.data.email);

        if (!success) {
            throw new Error('newsletter action failed');
        }

        return { formNewsletter };
    },
};
