<script lang="ts">
    import type { Expandable } from '#lib/storyblok/types.ts';
    import { storyblokEditable } from '#lib/storyblok/util.ts';
    import { ChevronRight } from '@lucide/svelte';
    import RichText from './RichText.svelte';

    interface Props {
        blok: Expandable;
    }

    let { blok }: Props = $props();

    let isExpanded = $state(false);
</script>

<div use:storyblokEditable={blok}>
    {#if isExpanded}
        <RichText content={blok.contentExpand} />
    {:else}
        <div class="flex justify-end">
            <button
                class="text-accent hover:text-accent-dark focus:text-accent-dark flex text-sm"
                onclick={() => (isExpanded = true)}
            >
                {blok.expandButtonText}
                <ChevronRight class="inline" size={20} />
            </button>
        </div>
    {/if}
</div>
