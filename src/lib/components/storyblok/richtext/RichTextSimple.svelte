<script lang="ts">
    import type { RichtextStoryblok } from '$lib/component-types-storyblok';
    import { renderRichText } from '@storyblok/svelte';

    export let content: RichtextStoryblok | undefined;
</script>

<div class="prose">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html renderRichText(content)}
</div>
