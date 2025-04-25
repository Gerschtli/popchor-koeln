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
        border-accent focus-within:border-accent-dark hover:border-accent-dark border-l-2
        py-1 pl-2 focus-within:outline-2 focus-within:outline-offset-2
        focus-within:outline-slate-500
    "
>
    <button on:click={toggle} class="text-left focus:outline-hidden">
        <h3 class="font-heading flex items-start font-bold" class:mb-2={expanded}>
            {#if expanded}
                <ChevronDown class="-ml-1 inline-block shrink-0" size={20} />
            {:else}
                <ChevronRight class="-ml-1 inline-block shrink-0" size={20} />
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
                {#if placeList.length === 1}
                    {placeList[0]}
                {:else}
                    {#each placeList as placeItem, i (i)}
                        <span class="sm:last:after:content-[] block sm:inline sm:after:content-[',_']">
                            {placeItem}
                        </span>
                    {/each}
                {/if}
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
                        bg-accent hover:bg-accent-dark flex gap-2 rounded-md px-4 py-2 text-center text-sm
                        font-semibold text-white shadow-sm transition-colors duration-100
                        ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2
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
