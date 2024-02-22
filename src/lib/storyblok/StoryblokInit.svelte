<script lang="ts">
    import type { PageStoryblok } from '$lib/component-types-storyblok';
    import { StoryblokComponent, useStoryblokBridge, type ISbStoryData } from '@storyblok/svelte';
    import { onMount } from 'svelte';
    import { resolveRelations } from './setup';

    export let story: ISbStoryData<PageStoryblok>;

    onMount(() => {
        useStoryblokBridge(story.id, (newStory) => (story = newStory), {
            resolveRelations,
        });
    });
</script>

{#if story}
    <StoryblokComponent blok={story.content} />
{/if}
