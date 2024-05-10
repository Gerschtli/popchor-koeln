<script lang="ts">
    import type { ImageSliderStoryblok } from '$lib/component-types-storyblok';
    import { onMount } from 'svelte';
    import BiggerPicture, { type BiggerPictureInstance } from "bigger-picture";

    // import style
    import "bigger-picture/css";

    export let blok: ImageSliderStoryblok;
    let container: HTMLDivElement;
    // initialize BiggerPicture
    let bp: BiggerPictureInstance;  

    onMount(() => {
        bp = BiggerPicture({
            target: container
        });
    });

    function openGallery(e:MouseEvent) {
        bp.open({
            items: container.querySelectorAll('a'),
            el: e.currentTarget ?? undefined,
            intro: 'fadeup',
            scale: 1
        })
    }

    function getDimensions(filename: string) {
        const result = filename.match('^https://a\\.storyblok\\.com/f/\\d+/(\\d+)x(\\d+)/');

        if (result?.length !== 3) return {};

        return { width: result[1], height: result[2] };
    }
</script>
<div bind:this={container}>
{#each blok.images as image}
{ @const dimensions = getDimensions(image.image.filename) }
<a on:click|preventDefault={openGallery}
    href={image.image.filename}
    data-img={image.image.filename}
    data-thumb={image.image.filename}
    data-alt={image.image.alt}
    data-height={dimensions.height}
    data-width={dimensions.width}
    > 
    <img
        src={image.image.filename}
        alt={image.image.alt} 
    />
</a>
{/each}
</div>

