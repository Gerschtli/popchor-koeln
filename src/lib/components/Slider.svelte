<script lang="ts" context="module">
    type T = unknown;
</script>

<script lang="ts" generics="T">
    import { ChevronLeft, ChevronRight } from 'lucide-svelte';

    export let labelPrevious: string;
    export let labelNext: string;
    export let items: T[];
    export let currentIndex = 0;

    let sliderElement: HTMLDivElement;

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

    function setCurrentIndex() {
        for (let i = 0; i < sliderElement.children.length; i++) {
            const ele = sliderElement.children.item(i)!;
            if (Math.abs(ele.getBoundingClientRect().left - sliderElement.getBoundingClientRect().left) < 10) {
                currentIndex = i;
            }
        }
    }

    $: if (sliderElement) {
        sliderElement.scrollLeft = (sliderElement.scrollWidth / items.length) * currentIndex;
    }
</script>

<div>
    <div class="relative">
        {#if hasPrev}
            <button
                class="absolute top-1/2 -left-8 -translate-y-1/2 py-2 text-neutral-600 hover:text-neutral-900 focus:text-neutral-900"
                aria-label={labelPrevious}
                title={labelPrevious}
                on:click={showPrev}
            >
                <ChevronLeft size={32} />
            </button>
        {/if}

        {#if hasNext}
            <button
                class="absolute top-1/2 -right-8 -translate-y-1/2 py-2 text-neutral-600 hover:text-neutral-900 focus:text-neutral-900"
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
            on:scrollend={setCurrentIndex}
        >
            {#each items as item, i (i)}
                <div class="grid aspect-video w-full shrink-0 snap-center content-center">
                    <slot {item} />
                </div>
            {/each}
        </div>
    </div>

    <div class="grid place-content-center p-2">
        <p>
            <span class="text-accent text-lg">{currentIndex + 1}</span>
            <small class="align-middle text-sm">/ {items.length}</small>
        </p>
    </div>
</div>
