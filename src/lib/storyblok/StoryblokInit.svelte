<script lang="ts">
    import type { Page } from '$storyblok/227856/storyblok-components';
    import { type ISbStoryData, StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
    import { onMount } from 'svelte';
    import { resolveRelations } from './setup';

    let { story, visualEditor }: { story: ISbStoryData<Page>; visualEditor: boolean } = $props();

    onMount(() => {
        if (!visualEditor) return;

        useStoryblokBridge(story.id, (newStory) => (story = newStory), {
            resolveRelations,
        });
    });
</script>

<StoryblokComponent blok={story.content} />
