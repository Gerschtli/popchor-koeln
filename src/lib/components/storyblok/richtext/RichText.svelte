<script lang="ts">
    import { renderRichText } from '#lib/storyblok/richtext.ts';
    import type { StoryblokRichtext } from '#lib/storyblok/types.ts';
    import { StoryblokComponent } from '@storyblok/svelte';

    interface Props {
        content: StoryblokRichtext | undefined;
    }

    let { content }: Props = $props();
</script>

{#if content?.content}
    {#each content.content as item, i (i)}
        {#if item.type === 'blok'}
            {#each item.attrs?.body as itemInner, i (i)}
                <StoryblokComponent blok={itemInner} />
            {/each}
        {:else}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html renderRichText({ type: 'doc', content: [item] })}
        {/if}
    {/each}
{/if}
