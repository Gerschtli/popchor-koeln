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

    function isExpandable(blok: any): blok is ExpandableStoryblok {
        return blok.component === 'expandable';
    }

    function isImage(blok: any): blok is ImageStoryblok {
        return blok.component === 'image';
    }

    function isYouTubeVideo(blok: any): blok is YoutubeVideoStoryblok {
        return blok.component === 'youtube_video';
    }
</script>

{#if content?.content}
    {#each content.content as item}
        {#if item.type === 'blok'}
            {#each item.attrs.body as blok}
                {#if isExpandable(blok)}
                    <Expandable {blok} />
                {:else if isImage(blok)}
                    <Image {blok} />
                {:else if isYouTubeVideo(blok)}
                    <YouTubeVideo {blok} />
                {/if}
            {/each}
        {:else}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html renderRichText({ type: 'doc', content: [item] })}
        {/if}
    {/each}
{/if}
