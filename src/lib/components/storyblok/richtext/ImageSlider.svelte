<script lang="ts">
    import type { ImageSliderStoryblok } from '$lib/component-types-storyblok';
    import Slider from '$lib/components/Slider.svelte';
    import { getDimensionsOfImageUrl } from '$lib/storyblok/util';
    import BiggerPicture, { type BiggerPictureInstance } from 'bigger-picture';
    import 'bigger-picture/css';
    import { onMount } from 'svelte';
    import { twMerge } from 'tailwind-merge';

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
            onClose(container, activeItem) {
                currentIndex = activeItem?.i
            },
            items: container.querySelectorAll('a'),
            el: e.currentTarget ?? undefined,
            intro: "fadeup"
        });
    }
</script>

<div bind:this={container}>
    <Slider bind:currentIndex
        labelPrevious="Zu vorherigem Bild wechseln"
        labelNext="Zu nächstem Bild wechseln"
        items={blok.images}
        let:baseClass
        let:item={image}
    >
        {@const dimensions = getDimensionsOfImageUrl(image.image.filename)}
        <a
            on:click|preventDefault={openGallery}
            class={twMerge('aspect-video w-full', baseClass)}
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
