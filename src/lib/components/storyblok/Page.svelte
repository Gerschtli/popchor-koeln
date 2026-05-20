<script lang="ts">
    import { storyblokEditable } from '$lib/storyblok/util';
    import type { Page } from '$storyblok/227856/storyblok-components';
    import { StoryblokComponent } from '@storyblok/svelte';

    export let blok: Page;
</script>

<svelte:head>
    <title>{blok.title}</title>
    {#if blok.description}
        <meta name="description" content={blok.description} />
    {/if}
</svelte:head>

{#key blok}
    <div use:storyblokEditable={blok}>
        {#if blok.body}
            {#each blok.body as blokInner (blokInner._uid)}
                <StoryblokComponent blok={blokInner} />
            {/each}
        {/if}
    </div>
{/key}
