<script lang="ts">
    import type { ExpandableStoryblok } from '$lib/component-types-storyblok';
    import { ChevronRight } from 'lucide-svelte';
    import RichText from './RichText.svelte';

    export let blok: ExpandableStoryblok;

    let isExpanded = false;
</script>

{#if isExpanded}
    <RichText content={blok.contentExpand} />
{:else}
    <div class="flex justify-end">
        <button
            class="flex text-sm text-accent hover:text-accent-dark focus:text-accent-dark"
            on:click={() => (isExpanded = true)}
        >
            {blok.expandButtonText}
            <ChevronRight class="inline" size={20} />
        </button>
    </div>
{/if}
