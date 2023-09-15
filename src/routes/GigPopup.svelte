<script lang="ts">
    import { browser } from '$app/environment';
    import { TicketIcon, X } from 'lucide-svelte';
    import { fade } from 'svelte/transition';

    const localStorageKey = 'gigPopupClosed';
    const hideAfterDate = new Date('2023-11-04T20:00:00+0100');
    $: closed = !browser || localStorage.getItem(localStorageKey) || new Date() > hideAfterDate;

    function close() {
        closed = true;
        localStorage.setItem(localStorageKey, 'true');
    }
</script>

{#if !closed}
    <div
        transition:fade
        class="fixed bottom-2 left-2 right-2 z-20 flex items-center gap-2 rounded-lg bg-accent p-4 text-white shadow-sm shadow-accent-dark sm:left-auto sm:max-w-lg"
    >
        <p class="text-balance">
            Wir feiern Geburtstag! Sei dabei und sichere dir hier dein Ticket für unser Jubiläumskonzert am 4.11.!
        </p>

        <a
            href="https://t.rausgegangen.de/tickets/popchorkoeln-zehn"
            target="_blank"
            rel="noopener noreferrer"
            class="
                flex gap-2 rounded-md bg-slate-600 px-4 py-2 text-center text-sm font-semibold
                text-white shadow-sm transition-colors duration-100 ease-in-out
                hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-slate-500
            "
        >
            Tickets
            <TicketIcon class="inline" size={20} />
        </a>

        <button aria-label="Popup schließen" on:click={close}>
            <X class="hover:text-slate-500" size={32} />
        </button>
    </div>
{/if}
