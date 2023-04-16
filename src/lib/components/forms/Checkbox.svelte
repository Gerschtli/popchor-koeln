<script lang="ts">
    import type { Writable } from 'svelte/store';
    import type { FieldPath, UnwrapEffects } from 'sveltekit-superforms';
    import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
    import type { AnyZodObject, z } from 'zod';

    type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<UnwrapEffects<T>, unknown>;
    export let field: keyof z.infer<T> | FieldPath<z.infer<T>>;
    export let name: string;
    export let screenReaderText: string;

    const { value, errors } = formFieldProxy(form, field);
    $: checked = value as Writable<boolean>;
</script>

<label class="flex items-center gap-4">
    <input type="checkbox" hidden {name} bind:checked={$checked} />

    <button
        type="button"
        class="
            inline-flex w-8 flex-none cursor-pointer rounded-full p-px transition-colors duration-100 ease-in-out
            focus-within:outline-slate-500 focus-visible:outline-offset-4
        "
        class:bg-accent={$checked}
        class:bg-slate-200={!$checked}
        class:ring-1={$errors}
        class:ring-red-500={$errors}
        class:ring-offset-1={$errors}
        role="switch"
        aria-checked={$checked}
        data-invalid={$errors}
        on:click={() => ($checked = !$checked)}
    >
        <span class="sr-only">{screenReaderText}</span>
        <span
            aria-hidden="true"
            class="
                h-4 w-4 rounded-full bg-white transition duration-100 ease-in-out
                {$checked ? 'translate-x-3.5' : 'translate-x-0'}
            "
        />
    </button>

    <span class="text-sm" class:text-slate-700={!$errors} class:text-red-500={$errors}>
        <slot />
    </span>
</label>
