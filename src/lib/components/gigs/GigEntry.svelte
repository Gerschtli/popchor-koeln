<script lang="ts">
    import { ChevronDown, ChevronRight, TicketIcon } from 'lucide-svelte';
    import GigLine from './GigLine.svelte';

    export let title: string;
    export let time: string;
    export let place: string[];
    export let price: string | undefined;
    export let entryTime: string | undefined;
    export let linkTickets: string | undefined;

    let expanded = false;
    const toggle = () => (expanded = !expanded);
</script>

<div
    class="
        cursor-pointer border-l-2 border-accent py-1 pl-2
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500
    "
    on:click={toggle}
    on:keypress={toggle}
    role="button"
    tabindex={0}
>
    <h3 class="flex items-start font-heading font-bold" class:mb-2={expanded}>
        {#if expanded}
            <ChevronDown class="-ml-1 inline-block flex-shrink-0" size={20} />
        {:else}
            <ChevronRight class="-ml-1 inline-block flex-shrink-0" size={20} />
        {/if}
        {title}
    </h3>

    {#if expanded}
        <GigLine label="Wann">{time}</GigLine>
        <GigLine label="Wo">
            <div>
                {#each place as placeItem}
                    <span class="block xs:inline xs:after:content-[',_'] xs:last:after:content-[]">{placeItem}</span>
                {/each}
            </div>
        </GigLine>
        {#if price}
            <GigLine label="Preis">{price}</GigLine>
        {/if}
        {#if entryTime}
            <GigLine label="Einlass">{entryTime}</GigLine>
        {/if}

        <p class="mt-2 text-sm text-neutral-600"><slot /></p>

        {#if linkTickets}
            <div class="mt-2 flex justify-end">
                <a
                    href={linkTickets}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="
                        flex gap-2 rounded-md bg-accent px-4 py-2 text-center text-sm font-semibold
                        text-white shadow-sm transition-colors duration-100 ease-in-out
                        hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-slate-500
                    "
                    on:click={(e) => {
                        e.stopPropagation();
                    }}
                >
                    Tickets
                    <TicketIcon class="inline" size={20} />
                </a>
            </div>
        {/if}
    {:else}
        <p class="text-sm text-neutral-600">{time} @ {place[0]}</p>
    {/if}
</div>
