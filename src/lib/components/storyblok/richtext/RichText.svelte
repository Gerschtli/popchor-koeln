<script lang="ts">
    import type {
        ExpandableStoryblok,
        ImageStoryblok,
        RichtextStoryblok,
        YoutubeVideoStoryblok,
    } from '$lib/component-types-storyblok';
    import { renderRichText } from '@storyblok/svelte';
    import Expandable from './Expandable.svelte';
    import Image from './Image.svelte';
    import YouTubeVideo from './YouTubeVideo.svelte';

    export let content: RichtextStoryblok | undefined;

    type CustomBlok = ExpandableStoryblok | ImageStoryblok | YoutubeVideoStoryblok;

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
    {#each content.content as item}
        {#if item.type === 'blok'}
            {#each getCustomBloks(item.attrs) as blok}
                {#if blok.component === 'expandable'}
                    <Expandable {blok} />
                {:else if blok.component === 'image'}
                    <Image {blok} />
                {:else if blok.component === 'youtube_video'}
                    <YouTubeVideo {blok} />
                {/if}
            {/each}
        {:else}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html renderRichText({ type: 'doc', content: [item] })}
        {/if}
    {/each}
{/if}
