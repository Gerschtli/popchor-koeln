<script lang="ts">
    import { getDimensionsOfImageUrl, storyblokEditable } from '$lib/storyblok/util';
    import type { Image } from '$storyblok/227856/storyblok-components';
    import type { StoryblokAsset } from '$storyblok/storyblok';

    export let blok: Image;

    function getAspectRatio(asset: StoryblokAsset) {
        const dimensions = getDimensionsOfImageUrl(asset);

        return `${dimensions.width} / ${dimensions.height}`;
    }
</script>

<figure class="flex flex-col items-center gap-1" use:storyblokEditable={blok}>
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
            class="max-h-80"
            src={blok.image.filename}
            style:aspect-ratio={getAspectRatio(blok.image)}
            loading="lazy"
            alt={blok.image.alt}
        />
    </picture>
    {#if blok.image.title}
        <figcaption class="text-sm text-neutral-600">{blok.image.title}</figcaption>
    {/if}
</figure>
