<script lang="ts" context="module">
    type T = unknown;
</script>

<script lang="ts" generics="T">
    import { ChevronLeft, ChevronRight, Circle } from 'lucide-svelte';

    export let labelPrevious: string;
    export let labelNext: string;
    export let items: T[];

    let sliderElement: HTMLDivElement;

    let currentIndex = 0;
    $: hasPrev = currentIndex > 0;
    $: hasNext = currentIndex < items.length - 1;

    function showPrev() {
        if (hasPrev) {
            currentIndex -= 1;
        }
    }

    function showNext() {
        if (hasNext) {
            currentIndex += 1;
        }
    }

    $: if (sliderElement) {
        sliderElement.scrollLeft = (sliderElement.scrollWidth / items.length) * currentIndex;
    }
</script>

<div class="relative">
    {#if hasPrev}
        <button
            class="absolute -left-8 top-1/2 -translate-y-1/2 py-2 text-neutral-600 hover:text-neutral-900 focus:text-neutral-900"
            aria-label={labelPrevious}
            title={labelPrevious}
            on:click={showPrev}
        >
            <ChevronLeft size={32} />
        </button>
    {/if}

    {#if hasNext}
        <button
            class="absolute -right-8 top-1/2 -translate-y-1/2 py-2 text-neutral-600 hover:text-neutral-900 focus:text-neutral-900"
            aria-label={labelNext}
            title={labelNext}
            on:click={showNext}
        >
            <ChevronRight size={32} />
        </button>
    {/if}

    <div
        bind:this={sliderElement}
        class="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth"
    >
        {#each items as item}
            <slot baseClass="flex-shrink-0 snap-center" {item} />
        {/each}
    </div>

    <div class="flex place-content-center p-1">
        {#each items as _, i}
            {@const isCurrent = currentIndex === i}
            <button
                class="p-2 {isCurrent
                    ? 'cursor-default text-accent'
                    : 'text-neutral-600 hover:text-neutral-900 focus:text-neutral-900'}"
                on:click={() => (currentIndex = i)}
            >
                <Circle fill={isCurrent ? 'currentColor' : 'none'} size={10} />
            </button>
        {/each}
    </div>
</div>
