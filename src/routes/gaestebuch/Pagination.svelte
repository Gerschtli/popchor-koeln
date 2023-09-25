<script lang="ts">
    import { ChevronLeft, ChevronRight } from 'lucide-svelte';
    import type { PageData } from './$types';
    import Link from './Link.svelte';

    export let data: PageData;
    export let id = false;

    $: pagesStart = Math.max(1, Math.min(data.pagesCurrent - 2, data.pagesTotal - 4));
    $: pagesEnd = Math.min(data.pagesTotal, pagesStart + 4);

    $: pagesAll = Array.from(Array(pagesEnd - pagesStart + 1), (_, i) => pagesStart + i);
</script>

{#if pagesAll.length > 1}
    <hr class="mx-16 border-slate-300" id={id ? data.paginationAnchor : undefined} />

    <div class="flex items-center justify-center gap-2 py-4 xs:gap-5">
        {#if data.pagesCurrent > 1}
            <Link {data} page={data.pagesCurrent - 1}>
                <ChevronLeft size={16} class="inline" />
            </Link>
        {:else}
            <span class="w-12" />
        {/if}

        {#each pagesAll as page}
            <Link {data} {page}>{page}</Link>
        {/each}

        {#if data.pagesCurrent < data.pagesTotal}
            <Link {data} page={data.pagesCurrent + 1}>
                <ChevronRight size={16} class="inline" />
            </Link>
        {:else}
            <span class="w-12" />
        {/if}
    </div>
{/if}
