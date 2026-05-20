<script lang="ts">
    import { storyblokEditable } from '$lib/storyblok/util';
    import type { Expandable } from '$storyblok/227856/storyblok-components';
    import { ChevronRight } from '@lucide/svelte';
    import RichText from './RichText.svelte';

    export let blok: Expandable;

    let isExpanded = false;
</script>

<div use:storyblokEditable={blok}>
    {#if isExpanded}
        <RichText content={blok.contentExpand} />
    {:else}
        <div class="flex justify-end">
            <button
                class="text-accent hover:text-accent-dark focus:text-accent-dark flex text-sm"
                on:click={() => (isExpanded = true)}
            >
                {blok.expandButtonText}
                <ChevronRight class="inline" size={20} />
            </button>
        </div>
    {/if}
</div>
