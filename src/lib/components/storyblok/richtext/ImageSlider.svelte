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
    let currentIndex = 0;

    onMount(() => {
        bp = BiggerPicture({
            target: document.body,
        });
    });

    function openGallery(e: Event) {
        bp.open({
            onClose(_container, activeItem) {
                currentIndex = activeItem?.i;
            },
            items: container.querySelectorAll('a'),
            el: e.currentTarget ?? undefined,
            intro: 'fadeup',
        });
    }
</script>

<div bind:this={container}>
    <Slider
        bind:currentIndex
        labelPrevious="Zu vorherigem Bild wechseln"
        labelNext="Zu nächstem Bild wechseln"
        items={blok.images}
        let:item={image}
    >
        {@const dimensions = getDimensionsOfImageUrl(image.image.filename)}
        <a
            class="justify-self-center"
            on:click|preventDefault={openGallery}
            href={image.image.filename}
            data-img={image.image.filename}
            data-thumb={image.image.filename}
            data-alt={image.image.alt}
            data-height={dimensions.height}
            data-width={dimensions.width}
        >
            <picture>
                <source
                    media="(max-width: 639px)"
                    srcset="{image.image.filename}/m/558x0/filters:no_upscale():format(webp) 1x,
                        {image.image.filename}/m/1116x0/filters:no_upscale():format(webp) 2x"
                    type="image/webp"
                />
                <source
                    media="(min-width: 640px) and (max-width: 767px)"
                    srcset="{image.image.filename}/m/544x0/filters:no_upscale():format(webp) 1x,
                        {image.image.filename}/m/1088x0/filters:no_upscale():format(webp) 2x"
                    type="image/webp"
                />
                <source
                    media="(min-width: 768px)"
                    srcset="{image.image.filename}/m/608x0/filters:no_upscale():format(webp) 1x,
                        {image.image.filename}/m/1216x0/filters:no_upscale():format(webp) 2x"
                    type="image/webp"
                />

                <source
                    media="(max-width: 639px)"
                    srcset="{image.image.filename}/m/558x0/filters:no_upscale():format(png) 1x,
                        {image.image.filename}/m/1116x0/filters:no_upscale():format(png) 2x"
                    type="image/png"
                />
                <source
                    media="(min-width: 640px) and (max-width: 767px)"
                    srcset="{image.image.filename}/m/544x0/filters:no_upscale():format(png) 1x,
                        {image.image.filename}/m/1088x0/filters:no_upscale():format(png) 2x"
                    type="image/png"
                />
                <source
                    media="(min-width: 768px)"
                    srcset="{image.image.filename}/m/608x0/filters:no_upscale():format(png) 1x,
                        {image.image.filename}/m/1216x0/filters:no_upscale():format(png) 2x"
                    type="image/png"
                />
                <img
                    class="max-h-[20rem]"
                    loading="lazy"
                    src="{image.image.filename}/m/608x0/filters:no_upscale():format(png)"
                    alt={image.image.alt}
                />
            </picture>
        </a>
    </Slider>
</div>
