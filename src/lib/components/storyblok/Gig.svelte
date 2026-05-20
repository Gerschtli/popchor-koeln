<script lang="ts">
    import { storyblokEditable } from '$lib/storyblok/util';
    import { parseDateAsUtc } from '$lib/utils';
    import type { Gig } from '$storyblok/227856/storyblok-components';
    import GigEntry from '../gigs/GigEntry.svelte';
    import RichTextSimple from './richtext/RichTextSimple.svelte';

    interface Props {
        blok: Gig;
    }

    let { blok }: Props = $props();

    let { title, place, placeShort, price, linkTickets, description } = $derived(blok);
    let date = $derived(parseDateAsUtc(blok.date));
    let entryTime = $derived(blok.entryTime ? parseDateAsUtc(blok.entryTime) : undefined);
</script>

<div use:storyblokEditable={blok}>
    <GigEntry {title} {date} {place} {placeShort} {price} {entryTime} {linkTickets}>
        <RichTextSimple content={description} />
    </GigEntry>
</div>
