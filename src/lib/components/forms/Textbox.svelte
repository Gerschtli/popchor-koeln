<script lang="ts" context="module">
    type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
    import type { FormPathLeaves } from 'sveltekit-superforms';
    import { formFieldProxy, type SuperForm } from 'sveltekit-superforms';

    export let form: SuperForm<T>;
    export let field: FormPathLeaves<T>;
    export let name: string;
    export let label: string;
    export let type: 'text' | 'email' = 'text';

    const { value, errors, constraints } = formFieldProxy(form, field);
</script>

<label class="block space-y-1">
    <span class="text-xs font-bold uppercase tracking-wider text-neutral-600">{label}:</span>
    {#if type === 'text'}
        <input
            type="text"
            {name}
            aria-invalid={$errors ? 'true' : undefined}
            bind:value={$value}
            {...$constraints}
            class="
                block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                focus:border-slate-500 focus:bg-white
            "
            class:border-red-600={$errors}
            class:focus:border-red-600={$errors}
        />
    {:else}
        <input
            type="email"
            {name}
            aria-invalid={$errors ? 'true' : undefined}
            bind:value={$value}
            {...$constraints}
            class="
                block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                focus:border-slate-500 focus:bg-white
            "
            class:border-red-600={$errors}
            class:focus:border-red-600={$errors}
        />
    {/if}

    {#if $errors}
        <p class="text-xs text-red-600">{$errors[0]}</p>
    {/if}
</label>
