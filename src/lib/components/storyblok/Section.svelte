<script lang="ts">
    import { renderRichText, storyblokEditable, type SbBlokData } from '@storyblok/svelte';
    import { ChevronRight } from 'lucide-svelte';

    export let blok: SbBlokData;

    let textExpand = false;
</script>

<div use:storyblokEditable={blok}>
    <section id={blok.id} class="container mx-auto my-8 p-4">
        <hgroup
            class="
            before:-z-1 relative mb-6 flex justify-center
            before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-slate-500
        "
        >
            <h2 class="relative bg-white px-8 font-heading text-3xl first-letter:text-accent">{blok.title}</h2>
        </hgroup>

        <div
            class="space-y-4 px-4 text-neutral-600 sm:px-8 lg:px-16 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold"
        >
            {@html renderRichText(blok.content)}

            {#if blok.contentExpand}
                {#if textExpand}
                    {@html renderRichText(blok.contentExpand)}
                {:else}
                    <div class="flex justify-end">
                        <button
                            class="flex text-sm text-accent hover:text-accent-dark focus:text-accent-dark"
                            on:click={() => (textExpand = true)}
                            >{blok.expandButtonText} <ChevronRight class="inline" size={20} /></button
                        >
                    </div>
                {/if}
            {/if}
        </div>
    </section>
</div>
