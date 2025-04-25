<script lang="ts">
    import YouTubeIcon from '$lib/assets/YouTubeIcon.svelte';
    import type { YoutubeVideoStoryblok } from '$lib/component-types-storyblok';
    import { storyblokEditable } from '@storyblok/svelte';
    import { twMerge } from 'tailwind-merge';

    export let blok: YoutubeVideoStoryblok;

    let enabled = false;
</script>

<div use:storyblokEditable={blok}>
    {#if enabled}
        <iframe
            class={twMerge('aspect-video w-full', $$props.class)}
            src="https://www.youtube.com/embed/{blok.code}?autoplay=1"
            title={blok.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    {:else}
        <button class={twMerge('relative block aspect-video w-full', $$props.class)} on:click={() => (enabled = true)}>
            <span class="absolute top-1/2 left-1/2 w-12 -translate-x-1/2 -translate-y-1/2"><YouTubeIcon /></span>
            <span class="absolute top-0 right-0 left-0 bg-black/80 px-5 py-3 text-left text-white">
                <strong>{blok.title}</strong>
                <small>auf YouTube</small>
            </span>
            <img class="" src="https://img.youtube.com/vi/{blok.code}/maxresdefault.jpg" alt={blok.title} />
        </button>
    {/if}
</div>
