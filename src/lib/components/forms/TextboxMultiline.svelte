<script lang="ts">
    import type { FieldPath, UnwrapEffects } from 'sveltekit-superforms';
    import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
    import type { AnyZodObject, z } from 'zod';

    type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<UnwrapEffects<T>, unknown>;
    export let field: keyof z.infer<T> | FieldPath<z.infer<T>>;
    export let name: string;
    export let label: string;

    const { value, errors, constraints } = formFieldProxy(form, field);
</script>

<label class="block space-y-1">
    <span class="text-xs font-bold uppercase tracking-wider text-neutral-600">{label}:</span>
    <textarea
        {name}
        data-invalid={$errors}
        bind:value={$value}
        {...$constraints}
        class="
            block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
            focus:border-slate-500 focus:bg-white
        "
        class:border-red-600={$errors}
        class:focus:border-red-600={$errors}
    />

    {#if $errors}
        <p class="text-xs text-red-600">{$errors[0]}</p>
    {/if}
</label>
