<script lang="ts">
    import { renderRichText } from '#lib/storyblok/richtext.ts';
    import type { StoryblokRichtext } from '#lib/storyblok/types.ts';

    interface Props {
        content: StoryblokRichtext | undefined;
    }

    let { content }: Props = $props();
</script>

{#if content}
    <div class="prose">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html renderRichText(content)}
    </div>
{/if}
