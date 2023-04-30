<script lang="ts">
    import type { Gig } from '$lib/types';
    import GigEntry from './GigEntry.svelte';

    export let gigs: Gig[];
</script>

<div class="space-y-4">
    {#each gigs as { title, time, place, price, entryTime, description, linkTickets }}
        <GigEntry {title} {time} {place} {price} {entryTime} {linkTickets}>
            <span class="[&_a]:text-blue-500 [&_a]:hover:text-blue-700 [&_a]:focus:text-blue-700"
                >{@html description}</span
            >
        </GigEntry>
    {/each}
</div>
