<script lang="ts">
    import { anchorRel } from '$lib/anchorRel';
    import type { RichtextStoryblok } from '$lib/component-types-storyblok';
    import { renderRichText } from '@storyblok/svelte';

    export let content: RichtextStoryblok | undefined;
</script>

<div class="prose" use:anchorRel>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html renderRichText(content)}
</div>
