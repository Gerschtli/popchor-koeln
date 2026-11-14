<script lang="ts">
    import Slider from '#lib/components/Slider.svelte';
    import type { YoutubeVideoSlider } from '#lib/storyblok/types.ts';
    import { storyblokEditable } from '#lib/storyblok/util.ts';
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
