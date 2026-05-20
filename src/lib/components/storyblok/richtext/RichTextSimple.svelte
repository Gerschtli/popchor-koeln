<script lang="ts">
    import { renderRichText } from '$lib/storyblok/richtext';
    import type { StoryblokRichtext } from '$storyblok/storyblok';

    export let content: StoryblokRichtext | undefined;
</script>

{#if content}
    <div class="prose">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html renderRichText(content)}
    </div>
{/if}
