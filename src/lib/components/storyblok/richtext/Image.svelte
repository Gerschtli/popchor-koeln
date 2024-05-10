<script lang="ts">
    import type { ImageStoryblok } from '$lib/component-types-storyblok';
    import { getDimensionsOfImageUrl } from '$lib/storyblok/util';

    export let blok: ImageStoryblok;

    function getAspectRatio(filename: string) {
        const dimensions = getDimensionsOfImageUrl(filename);

        return `${dimensions.width} / ${dimensions.height}`;
    }
</script>

<figure class="flex flex-col items-center gap-1">
    <picture>
        <source
            media="(max-width: 425px)"
            srcset="{blok.image.filename}/m/400x0/filters:format(webp) 1x, {blok.image
                .filename}/m/800x0/filters:format(webp) 2x"
            type="image/webp"
        />
        <source
            media="(min-width: 426px)"
            srcset="{blok.image.filename}/m/700x0/filters:format(webp) 1x, {blok.image
                .filename}/m/1400x0/filters:format(webp) 2x"
            type="image/webp"
        />
        <source
            media="(max-width: 425px)"
            srcset="{blok.image.filename}/m/400x0/filters:format(png) 1x, {blok.image
                .filename}/m/800x0/filters:format(png) 2x"
            type="image/png"
        />
        <source
            media="(min-width: 426px)"
            srcset="{blok.image.filename}/m/700x0/filters:format(png) 1x, {blok.image
                .filename}/m/1400x0/filters:format(png) 2x"
            type="image/png"
        />

        <img
            class="max-h-[20rem]"
            src={blok.image.filename}
            style:aspect-ratio={getAspectRatio(blok.image.filename)}
            loading="lazy"
            alt={blok.image.alt}
        />
    </picture>
    {#if blok.image.title}
        <figcaption class="text-sm text-neutral-600">{blok.image.title}</figcaption>
    {/if}
</figure>
