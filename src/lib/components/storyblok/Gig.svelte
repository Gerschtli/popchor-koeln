<script lang="ts">
    import { storyblokEditable } from '$lib/storyblok/util';
    import { parseDateAsUtc } from '$lib/utils';
    import type { Gig } from '$storyblok/227856/storyblok-components';
    import GigEntry from '../gigs/GigEntry.svelte';
    import RichTextSimple from './richtext/RichTextSimple.svelte';

    export let blok: Gig;

    $: ({ title, place, placeShort, price, linkTickets, description } = blok);
    $: date = parseDateAsUtc(blok.date);
    $: entryTime = blok.entryTime ? parseDateAsUtc(blok.entryTime) : undefined;
</script>

<div use:storyblokEditable={blok}>
    <GigEntry {title} {date} {place} {placeShort} {price} {entryTime} {linkTickets}>
        <RichTextSimple content={description} />
    </GigEntry>
</div>
