<script lang="ts" generics="T">
    import { ChevronLeft, ChevronRight } from '@lucide/svelte';
    import { type Snippet } from 'svelte';

    interface Props {
        labelPrevious: string;
        labelNext: string;
        items: T[];
        currentIndex?: number;
        children?: Snippet<[{ item: T }]>;
    }

    let { labelPrevious, labelNext, items, currentIndex = $bindable(0), children }: Props = $props();

    let sliderElement = $state<HTMLDivElement>();

    let hasPrev = $derived(currentIndex > 0);
    let hasNext = $derived(currentIndex < items.length - 1);

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
        if (!sliderElement) return;

        for (let i = 0; i < sliderElement.children.length; i++) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const ele = sliderElement.children.item(i)!;
            if (Math.abs(ele.getBoundingClientRect().left - sliderElement.getBoundingClientRect().left) < 10) {
                currentIndex = i;
            }
        }
    }

    $effect(() => {
        if (sliderElement) {
            sliderElement.scrollLeft = (sliderElement.scrollWidth / items.length) * currentIndex;
        }
    });
</script>

<div>
    <div class="relative">
        {#if hasPrev}
            <button
                class="absolute top-1/2 -left-8 -translate-y-1/2 py-2 text-neutral-600 hover:text-neutral-900 focus:text-neutral-900"
                aria-label={labelPrevious}
                title={labelPrevious}
                onclick={showPrev}
            >
                <ChevronLeft size={32} />
            </button>
        {/if}

        {#if hasNext}
            <button
                class="absolute top-1/2 -right-8 -translate-y-1/2 py-2 text-neutral-600 hover:text-neutral-900 focus:text-neutral-900"
                aria-label={labelNext}
                title={labelNext}
                onclick={showNext}
            >
                <ChevronRight size={32} />
            </button>
        {/if}

        <div
            bind:this={sliderElement}
            class="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth"
            onscrollend={setCurrentIndex}
        >
            {#each items as item, i (i)}
                <div class="grid aspect-video w-full shrink-0 snap-center content-center">
                    {@render children?.({ item })}
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
