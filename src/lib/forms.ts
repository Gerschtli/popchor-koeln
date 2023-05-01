import type { FormStatus } from '$lib/types';
import { derived, writable, type Readable } from 'svelte/store';
import { superForm } from 'sveltekit-superforms/client';
import type { Validation } from 'sveltekit-superforms/index';
import type { AnyZodObject } from 'zod';
import { z } from 'zod';

export function superFormBuilder<T extends AnyZodObject>(data: Validation<T>) {
    const error = writable(false);

    const form = superForm(data, {
        id: data.id,
        onError() {
            error.set(true);
        },
    });

    const status: Readable<FormStatus> = derived(
        [form.valid, form.empty, form.delayed, error],
        ([$valid, $empty, $delayed, $error]) => {
            if ($valid && !$empty) return 'success';
            if ($error) return 'error';
            if ($delayed) return 'loading';
            return 'ready';
        },
    );

    return { form, status };
}

function buildRequiredString(message: string) {
    return z.string({ required_error: message }).trim().min(1, { message });
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
