<script lang="ts">
    import YouTubeIcon from '$lib/assets/YouTubeIcon.svelte';
    import type { YoutubeVideoStoryblok } from '$lib/component-types-storyblok';

    export let blok: YoutubeVideoStoryblok;

    let className = '';
    export { className as class };

    let enabled = false;
</script>

{#if enabled}
    <iframe
        class="aspect-video w-full {className}"
        src="https://www.youtube.com/embed/{blok.code}?autoplay=1"
        title={blok.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    />
{:else}
    <button class="relative block aspect-video w-full {className}" on:click={() => (enabled = true)}>
        <span class="absolute left-1/2 top-1/2 w-12 -translate-x-1/2 -translate-y-1/2"><YouTubeIcon /></span>
        <span class="absolute left-0 right-0 top-0 bg-black/80 px-5 py-3 text-left text-white">
            <strong>{blok.title}</strong> <small>auf YouTube</small>
        </span>
        <img class="" src="https://img.youtube.com/vi/{blok.code}/maxresdefault.jpg" alt={blok.title} />
    </button>
{/if}
