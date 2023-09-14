<script lang="ts">
    import type { PageStoryblok } from '$lib/component-types-storyblok';
    import { StoryblokComponent, useStoryblokBridge, type ISbStoryData } from '@storyblok/svelte';
    import { onMount } from 'svelte';

    export let story: ISbStoryData<PageStoryblok>;

    onMount(() => {
        useStoryblokBridge(story.id, (newStory) => (story = newStory));
    });
</script>

{#if story}
    <StoryblokComponent blok={story.content} />
{/if}
