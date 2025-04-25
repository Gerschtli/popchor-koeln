<script lang="ts">
    import type { RichtextStoryblok } from '$lib/component-types-storyblok';
    import { renderRichText } from '$lib/storyblok/richtext';
    import { StoryblokComponent } from '@storyblok/svelte';

    export let content: RichtextStoryblok | undefined;
</script>

{#if content?.content}
    {#each content.content as item, i (i)}
        {#if item.type === 'blok'}
            {#each item.attrs.body as itemInner, i (i)}
                <StoryblokComponent blok={itemInner} />
            {/each}
        {:else}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html renderRichText({ type: 'doc', content: [item] })}
        {/if}
    {/each}
{/if}
