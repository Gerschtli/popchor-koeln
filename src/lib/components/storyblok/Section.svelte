<script lang="ts">
    import type { SectionStoryblok } from '$lib/component-types-storyblok';
    import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
    import { ChevronRight } from 'lucide-svelte';
    import RichText from './richtext/RichText.svelte';

    export let blok: SectionStoryblok;
</script>

<div use:storyblokEditable={blok}>
    <section id={blok.id} class="container mx-auto my-8 p-4">
        <hgroup
            class="
                relative mb-6 flex justify-center before:absolute
                before:inset-x-0 before:top-1/2 before:-z-1 before:h-px before:bg-slate-500
            "
        >
            <h2 class="font-heading first-letter:text-accent relative bg-white px-8 text-3xl">{blok.title}</h2>
        </hgroup>

        {#if blok.gigs?.length}
            {@const { reference, showOnlyFuture } = blok.gigs[0]}
            {#if typeof reference !== 'string' && reference?.content.list}
                <div class="space-y-4 px-4 sm:px-8 lg:px-16">
                    {#each reference.content.list as blokInner (blokInner._uid)}
                        <StoryblokComponent blok={blokInner} gigsShowOnlyFuture={showOnlyFuture} />
                    {/each}

                    {#if showOnlyFuture}
                        <div class="mt-2 flex items-center justify-end">
                            <a
                                class="text-accent hover:text-accent-dark focus:text-accent-dark inline-flex text-sm"
                                href="/termine"
                            >
                                zu allen Terminen <ChevronRight class="inline" size={20} />
                            </a>
                        </div>
                    {/if}
                </div>
            {/if}
        {:else}
            <div class="prose px-4 sm:px-8 lg:px-16">
                <RichText content={blok.content} />
            </div>
        {/if}
    </section>
</div>
