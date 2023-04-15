<script lang="ts">
    export let label: string;
    export let name: string;
    export let value: FormDataEntryValue | boolean | undefined = '';
    export let required: boolean;
    export let errors: string[] | undefined = undefined;
    export let errorMessage: string;
    export let options: string[];

    $: showError = errors?.length;
</script>

<label class="block space-y-1">
    <span class="text-xs font-bold uppercase tracking-wide text-slate-500">{label}:</span>
    <select
        {name}
        value={value ?? ''}
        {required}
        class="
            block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
            focus:border-slate-500 focus:bg-white
        "
        class:border-red-600={showError}
        class:focus:border-red-600={showError}
    >
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
    {#if showError}
        <p class="text-xs text-red-600">{errorMessage}</p>
    {/if}
</label>
