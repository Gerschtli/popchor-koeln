<script lang="ts">
    import type { YoutubeVideoSliderStoryblok } from '$lib/component-types-storyblok';
    import Slider from '$lib/components/Slider.svelte';
    import { storyblokEditable } from '@storyblok/svelte';
    import YouTubeVideo from './YouTubeVideo.svelte';

    export let blok: YoutubeVideoSliderStoryblok;
</script>

<div use:storyblokEditable={blok}>
    <Slider
        labelPrevious="Zu vorherigem Video wechseln"
        labelNext="Zu nächstem Video wechseln"
        items={blok.videos}
        let:item
    >
        <YouTubeVideo blok={item} />
    </Slider>
</div>
