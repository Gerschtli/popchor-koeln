<script lang="ts" context="module">
    type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
    import type { Writable } from 'svelte/store';
    import type { FormPathLeaves } from 'sveltekit-superforms';
    import { formFieldProxy, type SuperForm } from 'sveltekit-superforms';

    export let form: SuperForm<T>;
    export let field: FormPathLeaves<T>;
    export let name: string;

    const { value, errors } = formFieldProxy(form, field);
    const checked = value as Writable<boolean>;
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
