<script lang="ts">
    import { createDateNowMinusOneWeek, formatDate, formatTime } from '$lib/utils';
    import { ChevronDown, ChevronRight, TicketIcon } from 'lucide-svelte';
    import GigLine from './GigLine.svelte';

    export let title: string;
    export let date: Date;
    export let placeShort: string;
    export let place: string;
    export let price: string | undefined;
    export let entryTime: Date | undefined;
    export let linkTickets: string | undefined;

    let expanded = false;
    function toggle() {
        expanded = !expanded;
    }

    $: dateFormatted = `${formatDate(date)} um ${formatTime(date)} Uhr`;
    $: entryTimeFormatted = entryTime ? `${formatTime(entryTime)} Uhr` : undefined;

    $: placeList = place.split(',').map((p) => p.trim());
</script>

<div
    class="
        border-l-2 border-accent py-1 pl-2
        focus-within:border-accent-dark focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-500
        hover:border-accent-dark
    "
>
    <button on:click={toggle} class="text-left focus:outline-none">
        <h3 class="flex items-start font-heading font-bold" class:mb-2={expanded}>
            {#if expanded}
                <ChevronDown class="-ml-1 inline-block flex-shrink-0" size={20} />
            {:else}
                <ChevronRight class="-ml-1 inline-block flex-shrink-0" size={20} />
            {/if}
            {title}
        </h3>

        {#if !expanded}
            <p class="text-sm text-neutral-600">{dateFormatted} @ {placeShort}</p>
        {/if}
    </button>

    {#if expanded}
        <GigLine label="Wann">{dateFormatted}</GigLine>
        <GigLine label="Wo">
            <div>
                {#each placeList as placeItem}
                    <span class="block sm:inline sm:after:content-[',_'] sm:last:after:content-[]">{placeItem}</span>
                {/each}
            </div>
        </GigLine>
        {#if price}
            <GigLine label="Preis">{price}</GigLine>
        {/if}
        {#if entryTime}
            <GigLine label="Einlass">ab {entryTimeFormatted}</GigLine>
        {/if}

        <p class="mt-2 text-sm text-neutral-600"><slot /></p>

        {#if linkTickets && date > createDateNowMinusOneWeek()}
            <div class="mt-2 flex justify-end">
                <a
                    href={linkTickets}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="
                        flex gap-2 rounded-md bg-accent px-4 py-2 text-center text-sm font-semibold
                        text-white shadow-sm transition-colors duration-100 ease-in-out
                        hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-slate-500
                    "
                    on:click={(e) => e.stopPropagation()}
                >
                    Tickets
                    <TicketIcon class="inline" size={20} />
                </a>
            </div>
        {/if}
    {/if}
</div>
