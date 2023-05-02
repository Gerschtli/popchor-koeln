<script lang="ts">
    import type { GigStoryblok } from '$lib/component-types-storyblok';
    import { renderRichText, storyblokEditable } from '@storyblok/svelte';
    import GigEntry from '../gigs/GigEntry.svelte';

    export let blok: GigStoryblok;
    export let gigsShowOnlyFuture = false;

    $: ({ title, place, placeShort, price, linkTickets, description } = blok);
    $: date = new Date(`${blok.date} GMT`);
    $: entryTime = blok.entryTime ? new Date(`${blok.entryTime} GMT`) : undefined;

    $: show = !gigsShowOnlyFuture || date.getTime() >= Date.now();
</script>

{#if show}
    <div use:storyblokEditable={blok}>
        <GigEntry {title} {date} {place} {placeShort} {price} {entryTime} {linkTickets}>
            <div class="[&_a]:text-blue-500 [&_a]:hover:text-blue-700 [&_a]:focus:text-blue-700">
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html renderRichText(description)}
            </div>
        </GigEntry>
    </div>
{/if}
