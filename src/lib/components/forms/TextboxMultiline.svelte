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

    const { value, errors, constraints } = formFieldProxy(form, field);
</script>

<label class="block space-y-1">
    <span class="text-xs font-bold tracking-wider text-neutral-600 uppercase">{label}:</span>
    <textarea
        {name}
        aria-invalid={$errors ? 'true' : undefined}
        bind:value={$value}
        {...$constraints}
        class="
            block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-hidden
            focus:border-slate-500 focus:bg-white {$$props.class}
        "
        class:border-red-600={$errors}
        class:focus:border-red-600={$errors}
    ></textarea>

    {#if $errors}
        <p class="text-xs text-red-600">{$errors[0]}</p>
    {/if}
</label>
