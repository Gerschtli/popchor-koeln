<script lang="ts">
    import type { GigStoryblok } from '$lib/component-types-storyblok';
    import { getGigSeparator } from '$lib/gigSeparator';
    import { parseDateAsUtc } from '$lib/utils';
    import { renderRichText, storyblokEditable } from '@storyblok/svelte';
    import GigEntry from '../gigs/GigEntry.svelte';

    export let blok: GigStoryblok;
    export let gigsShowOnlyFuture = false;

    $: ({ _uid: id, title, place, placeShort, price, linkTickets, description } = blok);
    $: date = parseDateAsUtc(blok.date);
    $: year = date.getFullYear();
    $: entryTime = blok.entryTime ? parseDateAsUtc(blok.entryTime) : undefined;

    $: show = !gigsShowOnlyFuture || date.getTime() >= Date.now();

    const gigSeparator = getGigSeparator();

    $: showSeparator = $gigSeparator !== undefined && !Array.from($gigSeparator?.values()).includes(year);
    $: show ? $gigSeparator?.set(id, year) : $gigSeparator?.delete(id);
</script>

{#if show}
    {#if showSeparator}
        <h3 class="font-heading text-lg font-bold">Jahr {year}</h3>
    {/if}

    <div use:storyblokEditable={blok}>
        <GigEntry {title} {date} {place} {placeShort} {price} {entryTime} {linkTickets}>
            <div class="[&_a]:text-blue-500 [&_a]:hover:text-blue-700 [&_a]:focus:text-blue-700">
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html renderRichText(description)}
            </div>
        </GigEntry>
    </div>
{/if}
