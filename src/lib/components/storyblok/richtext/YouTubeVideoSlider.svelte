<script lang="ts">
    import Slider from '$lib/components/Slider.svelte';
    import { storyblokEditable } from '$lib/storyblok/util';
    import type { YoutubeVideoSlider } from '$storyblok/227856/storyblok-components';
    import YouTubeVideo from './YouTubeVideo.svelte';

    interface Props {
        blok: YoutubeVideoSlider;
    }

    let { blok }: Props = $props();
</script>

<div use:storyblokEditable={blok}>
    <Slider labelPrevious="Zu vorherigem Video wechseln" labelNext="Zu nächstem Video wechseln" items={blok.videos}>
        {#snippet children({ item })}
            <YouTubeVideo blok={item} />
        {/snippet}
    </Slider>
</div>
