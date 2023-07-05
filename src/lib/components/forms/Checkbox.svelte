<script lang="ts">
    import type { Writable } from 'svelte/store';
    import type { FormPathLeaves, UnwrapEffects } from 'sveltekit-superforms';
    import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
    import type { AnyZodObject, z } from 'zod';

    // eslint-disable-next-line no-undef
    type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<UnwrapEffects<T>, unknown>;
    export let field: FormPathLeaves<z.infer<T>>;
    export let name: string;

    const { value, errors } = formFieldProxy(form, field);
    $: checked = value as Writable<boolean>;
</script>

<label class="flex items-center gap-4">
    <input
        type="checkbox"
        hidden
        {name}
        bind:checked={$checked}
        class="
            inline-flex w-8 flex-none cursor-pointer appearance-none rounded-full bg-slate-200 p-px transition-colors duration-100 ease-in-out
            before:h-4 before:w-4 before:translate-x-0 before:rounded-full before:bg-white before:transition before:duration-100 before:ease-in-out
            checked:bg-accent checked:before:translate-x-3.5
            focus-within:outline-slate-500 focus-visible:outline-offset-4
        "
        class:ring-1={$errors}
        class:ring-red-500={$errors}
        class:ring-offset-1={$errors}
        aria-invalid={$errors ? 'true' : undefined}
    />

    <span class="text-sm" class:text-neutral-600={!$errors} class:text-red-500={$errors}>
        <slot />
    </span>
</label>
