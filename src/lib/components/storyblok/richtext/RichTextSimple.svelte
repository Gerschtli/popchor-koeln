<script lang="ts">
    import { renderRichText } from '$lib/storyblok/richtext';
    import type { StoryblokRichtext } from '$storyblok/storyblok';

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
