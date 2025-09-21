<script lang="ts">
    import type { SectionStoryblok } from '$lib/component-types-storyblok';
    import { parseDateAsUtc } from '$lib/utils';
    import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
    import { ChevronRight } from 'lucide-svelte';
    import RichText from './richtext/RichText.svelte';

    export let blok: SectionStoryblok;

    const now = new Date();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function groupByYear(list: any[], showOnlyFuture: boolean | undefined) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return list.reduce<Map<number, any[]>>((agg, current) => {
            const date = parseDateAsUtc(current.date);

            if (showOnlyFuture && parseDateAsUtc(current.date) < now) {
                return agg;
            }

            const year = date.getFullYear();

            const yearEntry = agg.get(year) ?? [];
            yearEntry.push(current);

            agg.set(year, yearEntry);

            return agg;
        }, new Map());
    }
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
                {@const grouped = groupByYear(reference.content.list, showOnlyFuture)}

                <div class="space-y-4 px-4 sm:px-8 lg:px-16">
                    {#each grouped as [year, list] (year)}
                        {#if !showOnlyFuture}
                            <h3 class="font-heading text-lg font-bold">Jahr {year}</h3>
                        {/if}
                        {#each list as blokInner (blokInner._uid)}
                            <StoryblokComponent blok={blokInner} />
                        {/each}
                    {/each}

                    {#if grouped.size === 0}
                        <p class="text-sm text-neutral-500">
                            Aktuell haben wir keine anstehenden Termine, aber die Planung ist schon im vollen Gange!
                        </p>
                    {/if}

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
