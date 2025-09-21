<script lang="ts">
    import type { GigStoryblok } from '$lib/component-types-storyblok';
    import { parseDateAsUtc } from '$lib/utils';
    import { storyblokEditable } from '@storyblok/svelte';
    import GigEntry from '../gigs/GigEntry.svelte';
    import RichTextSimple from './richtext/RichTextSimple.svelte';

    export let blok: GigStoryblok;

    $: ({ title, place, placeShort, price, linkTickets, description } = blok);
    $: date = parseDateAsUtc(blok.date);
    $: entryTime = blok.entryTime ? parseDateAsUtc(blok.entryTime) : undefined;
</script>

<div use:storyblokEditable={blok}>
    <GigEntry {title} {date} {place} {placeShort} {price} {entryTime} {linkTickets}>
        <RichTextSimple content={description} />
    </GigEntry>
</div>
