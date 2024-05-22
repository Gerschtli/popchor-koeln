<script lang="ts">
    import type { ImageSliderStoryblok } from '$lib/component-types-storyblok';
    import Slider from '$lib/components/Slider.svelte';
    import { getDimensionsOfImageUrl } from '$lib/storyblok/util';
    import BiggerPicture, { type BiggerPictureInstance } from 'bigger-picture';
    import 'bigger-picture/css';
    import { onMount } from 'svelte';

    export let blok: ImageSliderStoryblok;

    let container: HTMLDivElement;
    let bp: BiggerPictureInstance;
    let currentIndex: number;

    onMount(() => {
        bp = BiggerPicture({
            target: document.body,
        });
    });

    function openGallery(e: Event) {
        const items = container.querySelectorAll('a');

        bp.open({
            items,
            el: e.currentTarget ?? undefined,
        });
    }
</script>

<div bind:this={container}>
    <Slider
        labelPrevious="Zu vorherigem Video wechseln"
        labelNext="Zu nächstem Video wechseln"
        items={blok.images}
        let:item={image}
    >
        {@const dimensions = getDimensionsOfImageUrl(image.image.filename)}
        <a
            on:click|preventDefault={openGallery}
            href={image.image.filename}
            data-img={image.image.filename}
            data-thumb={image.image.filename}
            data-alt={image.image.alt}
            data-height={dimensions.height}
            data-width={dimensions.width}
        >
            <img class="max-h-[20rem]" loading="lazy" src={image.image.filename} alt={image.image.alt} />
        </a>
    </Slider>
</div>
