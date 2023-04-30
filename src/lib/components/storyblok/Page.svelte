<script lang="ts">
    import { StoryblokComponent, storyblokEditable, type SbBlokData } from '@storyblok/svelte';

    export let blok: SbBlokData;
</script>

{#key blok}
    <div use:storyblokEditable={blok}>
        {#each blok.body as blokInner}
            <StoryblokComponent blok={blokInner} />
        {/each}
    </div>
{/key}
