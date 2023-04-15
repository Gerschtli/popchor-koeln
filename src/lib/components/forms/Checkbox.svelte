<script lang="ts">
    export let label: string;
    export let screenReaderText: string;
    export let name: string;
    export let value: FormDataEntryValue | boolean | undefined = undefined;
    export let errors: string[] | undefined = undefined;

    $: showError = errors?.length;

    let checked = typeof value === 'boolean' ? value : value === 'on';
</script>

<label class="flex items-center gap-4">
    <input type="checkbox" class="hidden" {name} bind:checked />

    <button
        type="button"
        class="
            inline-flex w-8 flex-none cursor-pointer rounded-full p-px transition-colors duration-100 ease-in-out
            focus-within:outline-slate-500 focus-visible:outline-offset-4
        "
        class:bg-accent={checked}
        class:bg-slate-200={!checked}
        class:ring-1={showError}
        class:ring-red-500={showError}
        class:ring-offset-1={showError}
        role="switch"
        aria-checked={checked}
        on:click={() => (checked = !checked)}
    >
        <span class="sr-only">{screenReaderText}</span>
        <span
            aria-hidden="true"
            class="
                h-4 w-4 rounded-full bg-white transition duration-100 ease-in-out
                {checked ? 'translate-x-3.5' : 'translate-x-0'}
            "
        />
    </button>

    <span class="text-sm" class:text-slate-700={!showError} class:text-red-500={showError}>
        {label}
    </span>
</label>
