<script lang="ts">
    import type { SectionStoryblok } from '$lib/component-types-storyblok';
    import { StoryblokComponent, renderRichText, storyblokEditable } from '@storyblok/svelte';
    import { ChevronRight } from 'lucide-svelte';

    export let blok: SectionStoryblok;

    let textExpand = false;

    function expand() {
        textExpand = true;
    }
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

        {#if blok.gigs?.length}
            {@const { reference, showOnlyFuture } = blok.gigs[0]}
            {#if typeof reference !== 'string' && reference?.content.list}
                <div class="space-y-4 px-4 sm:px-8 lg:px-16">
                    {#each reference.content.list as blokInner}
                        <StoryblokComponent blok={blokInner} gigsShowOnlyFuture={showOnlyFuture} />
                    {/each}

                    {#if showOnlyFuture}
                        <div class="mt-2 flex items-center justify-end">
                            <a
                                class="inline-flex text-sm text-accent hover:text-accent-dark focus:text-accent-dark"
                                href="/termine"
                                data-sveltekit-preload-data
                            >
                                zu allen Terminen <ChevronRight class="inline" size={20} />
                            </a>
                        </div>
                    {/if}
                </div>
            {/if}
        {:else}
            <div
                class={`
                    space-y-4 px-4 sm:px-8 lg:px-16
                    [&_h3]:pt-2 [&_h3]:font-heading [&_h3]:text-2xl
                    [&_h4]:pt-1 [&_h4]:font-heading [&_h4]:text-xl
                    [&_p]:text-neutral-600
                `}
            >
                {@html renderRichText(blok.content)}

                {#if blok.showExpandButton}
                    {#if textExpand}
                        {@html renderRichText(blok.contentExpand)}
                    {:else}
                        <div class="flex justify-end">
                            <button
                                class="flex text-sm text-accent hover:text-accent-dark focus:text-accent-dark"
                                on:click={expand}
                                >{blok.expandButtonText} <ChevronRight class="inline" size={20} /></button
                            >
                        </div>
                    {/if}
                {/if}
            </div>
        {/if}
    </section>
</div>
