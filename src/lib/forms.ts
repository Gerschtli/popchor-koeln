import type { FormStatus } from '$lib/types';
import { derived, writable, type Readable } from 'svelte/store';
import { superForm } from 'sveltekit-superforms/client';
import type { Validation } from 'sveltekit-superforms/index';
import type { AnyZodObject } from 'zod';

export const superFormBuilder = <T extends AnyZodObject>(data: Validation<T>) => {
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
};
