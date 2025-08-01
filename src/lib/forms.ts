import type { FormStatus } from '$lib/types';
import { derived, writable, type Readable } from 'svelte/store';
import type { SuperValidated } from 'sveltekit-superforms';
import { superForm } from 'sveltekit-superforms';
import { z } from 'zod';

export function superFormBuilder<T extends Record<string, unknown>>(data: SuperValidated<T>) {
    const error = writable(false);

    const form = superForm(data, {
        resetForm: false,
        onError() {
            error.set(true);
        },
    });

    const status: Readable<FormStatus> = derived(
        [form.allErrors, form.posted, form.delayed, error],
        ([$allErrors, $posted, $delayed, $error]) => {
            if (!$allErrors.length && $posted) return 'success';
            if ($error) return 'error';
            if ($delayed) return 'loading';
            return 'ready';
        },
    );

    return { form, status };
}

function buildRequiredString(message: string) {
    return z.string({ error: message }).trim().min(1, { message });
}

function buildRequiredEmail(message: string) {
    return buildRequiredString(message).email({ message });
}

export const schemaContact = z.object({
    name: buildRequiredString('Bitte trage deinen Namen ein.'),
    email: buildRequiredEmail('Bitte trage deine Email Adresse ein.'),
    subject: buildRequiredString('Bitte wähle einen Betreff aus.'),
    message: buildRequiredString('Bitte trage deinen Nachricht ein.'),
    newsletter: z.boolean(),
});
export const schemaNewsletter = z.object({
    email: buildRequiredEmail('Bitte trage deine Email Adresse ein.'),
    acceptTerms: z.literal(true),
});
