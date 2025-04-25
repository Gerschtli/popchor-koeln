<script lang="ts">
    import type { RichtextStoryblok } from '$lib/component-types-storyblok';
    import { renderRichText } from '$lib/storyblok/richtext';

    export let content: RichtextStoryblok | undefined;
</script>

{#if content}
    <div class="prose">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html renderRichText(content)}
    </div>
{/if}
