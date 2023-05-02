<script lang="ts">
    import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
    import { onMount } from 'svelte';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export let story: any;

    onMount(() => {
        useStoryblokBridge(story.id, (newStory) => (story = newStory));
    });
</script>

{#if story}
    <StoryblokComponent blok={story.content} />
{/if}
