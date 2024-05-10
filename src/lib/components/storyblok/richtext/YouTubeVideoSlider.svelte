<script lang="ts">
    import type { YoutubeVideoSliderStoryblok } from '$lib/component-types-storyblok';
    import Slider from '$lib/components/Slider.svelte';
    import YouTubeVideo from './YouTubeVideo.svelte';

    export let blok: YoutubeVideoSliderStoryblok;
</script>

<Slider
    labelPrevious="Zu vorherigem Video wechseln"
    labelNext="Zu nächstem Video wechseln"
    items={blok.videos}
    let:baseClass
    let:item
>
    <YouTubeVideo class={baseClass} blok={item} />
</Slider>
