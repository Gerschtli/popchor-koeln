<script lang="ts">
    import type { PageStoryblok } from '$lib/component-types-storyblok';
    import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';

    export let blok: PageStoryblok;
</script>

<svelte:head>
    <title>{blok.title}</title>
    {#if blok.description}
        <meta name="description" content={blok.description} />
    {/if}
</svelte:head>

{#key blok}
    <div use:storyblokEditable={blok}>
        {#each blok.body as blokInner}
            <StoryblokComponent blok={blokInner} />
        {/each}
    </div>
{/key}
