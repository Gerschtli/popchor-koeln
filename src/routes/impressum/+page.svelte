<script lang="ts">
    import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
    import { onMount } from 'svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    onMount(() => {
        useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
    });
</script>

<svelte:head>
    <title>Impressum - popCHORköln</title>
</svelte:head>

{#if data.story}
    <StoryblokComponent blok={data.story.content} />
{/if}
