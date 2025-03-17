<script lang="ts">
    import type {
        ExpandableStoryblok,
        ImageSliderStoryblok,
        ImageStoryblok,
        RichtextStoryblok,
        YoutubeVideoSliderStoryblok,
        YoutubeVideoStoryblok,
    } from '$lib/component-types-storyblok';
    import { renderRichText } from '@storyblok/svelte';
    import Expandable from './Expandable.svelte';
    import Image from './Image.svelte';
    import ImageSlider from './ImageSlider.svelte';
    import YouTubeVideo from './YouTubeVideo.svelte';
    import YouTubeVideoSlider from './YouTubeVideoSlider.svelte';

    export let content: RichtextStoryblok | undefined;

    type CustomBlok =
        | ExpandableStoryblok
        | ImageStoryblok
        | ImageSliderStoryblok
        | YoutubeVideoStoryblok
        | YoutubeVideoSliderStoryblok;

    function getCustomBloks(attrs: unknown) {
        if (
            !attrs ||
            typeof attrs !== 'object' ||
            !('body' in attrs) ||
            !Array.isArray(attrs.body) ||
            attrs.body.length === 0
        ) {
            return [];
        }

        return attrs.body.filter((x): x is CustomBlok => !!x && typeof x === 'object' && 'component' in x);
    }
</script>

{#if content?.content}
    {#each content.content as item, i (i)}
        {#if item.type === 'blok'}
            {#each getCustomBloks(item.attrs) as blok (blok._uid)}
                {#if blok.component === 'expandable'}
                    <Expandable {blok} />
                {:else if blok.component === 'image'}
                    <Image {blok} />
                {:else if blok.component === 'image_slider'}
                    <ImageSlider {blok} />
                {:else if blok.component === 'youtube_video'}
                    <YouTubeVideo {blok} />
                {:else if blok.component === 'youtube_video_slider'}
                    <YouTubeVideoSlider {blok} />
                {/if}
            {/each}
        {:else}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html renderRichText({ type: 'doc', content: [item] })}
        {/if}
    {/each}
{/if}
