import Gig from './Gig.svelte';
import Page from './Page.svelte';
import Expandable from './richtext/Expandable.svelte';
import Image from './richtext/Image.svelte';
import ImageSlider from './richtext/ImageSlider.svelte';
import YouTubeVideo from './richtext/YouTubeVideo.svelte';
import YouTubeVideoSlider from './richtext/YouTubeVideoSlider.svelte';
import Section from './Section.svelte';

export const components = {
    gig: Gig,
    page: Page,
    section: Section,

    expandable: Expandable,
    image: Image,
    image_slider: ImageSlider,
    youtube_video: YouTubeVideo,
    youtube_video_slider: YouTubeVideoSlider,
};
