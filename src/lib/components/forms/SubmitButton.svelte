<script lang="ts">
    import type { FormStatus } from '$lib/types';
    import { Check, Loader2, MailWarning } from 'lucide-svelte';

    export let status: FormStatus;
    export let text: string;
</script>

<button
    type="submit"
    disabled={status !== 'ready'}
    class="
        bg-accent hover:bg-accent-dark flex w-full items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-100
        ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500
    "
    class:disabled:bg-slate-400={status !== 'success' && status !== 'error'}
    class:disabled:bg-green-500={status === 'success'}
    class:disabled:bg-red-600={status === 'error'}
>
    {#if status === 'loading'}
        <Loader2 class="mr-1 inline animate-spin" size={16} /> Bitte warten..
    {:else if status === 'success'}
        <Check class="mr-1 inline" size={16} /> {text} war erfolgreich!
    {:else if status === 'error'}
        <MailWarning class="mr-1 inline" size={16} /> {text} fehlgeschlagen, bitte versuchen Sie es später erneut.
    {:else}
        {text}
    {/if}
</button>
