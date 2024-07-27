<script lang="ts">
    import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';

    export let data;
</script>

<StoryblokInit story={data.story} />
