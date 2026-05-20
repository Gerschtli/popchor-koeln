<script lang="ts">
    import Slider from '$lib/components/Slider.svelte';
    import { storyblokEditable } from '$lib/storyblok/util';
    import type { YoutubeVideoSlider } from '$storyblok/227856/storyblok-components';
    import YouTubeVideo from './YouTubeVideo.svelte';

    export let blok: YoutubeVideoSlider;
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
