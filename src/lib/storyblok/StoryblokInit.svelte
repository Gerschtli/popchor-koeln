<script lang="ts">
    import type { PageStoryblok } from '$lib/component-types-storyblok';
    import { type ISbStoryData, StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
    import { onMount } from 'svelte';
    import { resolveRelations } from './setup';

    let { story, visualEditor }: { story: ISbStoryData<PageStoryblok>; visualEditor: boolean } = $props();

    onMount(() => {
        if (!visualEditor) return;

        useStoryblokBridge(story.id, (newStory) => (story = newStory), {
            resolveRelations,
        });
    });
</script>

<StoryblokComponent blok={story.content} />
