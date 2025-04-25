<script lang="ts">
    import { initGigSeparator } from '$lib/gigSeparator';
    import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

    export let data;

    initGigSeparator();
</script>

<StoryblokInit story={data.story} visualEditor={data.storyblokVisualEditor} />
