<script lang="ts">
    import ticket180Png from '$lib/assets/popup.png?h=180&format=png&imagetools';
    import ticket180Webp from '$lib/assets/popup.png?h=180&format=webp&imagetools';
    import ticket220Png from '$lib/assets/popup.png?h=220&format=png&imagetools';
    import ticket220Webp from '$lib/assets/popup.png?h=220&format=webp&imagetools';
    import ticket260Png from '$lib/assets/popup.png?h=260&format=png&imagetools';
    import ticket260Webp from '$lib/assets/popup.png?h=260&format=webp&imagetools';
    import ticket360Png from '$lib/assets/popup.png?h=360&format=png&imagetools';
    import ticket360Webp from '$lib/assets/popup.png?h=360&format=webp&imagetools';
    import ticket440Png from '$lib/assets/popup.png?h=440&format=png&imagetools';
    import ticket440Webp from '$lib/assets/popup.png?h=440&format=webp&imagetools';
    import ticket520Png from '$lib/assets/popup.png?h=520&format=png&imagetools';
    import ticket520Webp from '$lib/assets/popup.png?h=520&format=webp&imagetools';

    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { X } from '@lucide/svelte';
    import { fade } from 'svelte/transition';

    const localStorageKey = 'gigVocanoPckPopupClosed';
    const hideAfterDate = new Date('2026-10-03T20:00:00+0100');
    let closed = $state(!browser || localStorage.getItem(localStorageKey) || new Date() > hideAfterDate);

    function close() {
        closed = true;
        localStorage.setItem(localStorageKey, 'true');
    }

    let mounted = $state(false);
    onMount(() => {
        mounted = true;
    });
</script>

{#if !closed && mounted}
    <div
        transition:fade
        class="fixed right-2 bottom-2 left-2 z-20 flex flex-col items-center bg-white/75 p-1 text-neutral-600 shadow-lg shadow-neutral-400 sm:left-auto sm:max-w-lg"
    >
        <div
            class="mb-0 flex w-full items-center justify-between rounded-t-md border-b border-neutral-200 bg-white/95 px-3 py-2 text-sm font-semibold shadow-md"
        >
            <p class="leading-tight">Jetzt Tickets sichern!</p>
            <button aria-label="Popup schließen" onclick={close} class="ml-2">
                <X class="hover:text-slate-500" size={24} />
            </button>
        </div>

        <div class="flex w-full justify-center">
            <div
                class="flex w-full justify-center overflow-hidden rounded-b-md border border-neutral-200 bg-white/90 shadow-lg"
            >
                <a href="https://popchorkoeln.ticket.io/" target="_blank" rel="noopener noreferrer" class="block">
                    <picture>
                        <source
                            media="(max-width: 639px)"
                            srcset="{ticket180Webp} 1x, {ticket360Webp} 2x"
                            type="image/webp"
                        />
                        <source
                            media="(min-width: 640px) and (max-width: 767px)"
                            srcset="{ticket220Webp} 1x, {ticket440Webp} 2x"
                            type="image/webp"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcset="{ticket260Webp} 1x, {ticket520Webp} 2x"
                            type="image/webp"
                        />

                        <source
                            media="(max-width: 639px)"
                            srcset="{ticket180Png} 1x, {ticket360Png} 2x"
                            type="image/png"
                        />
                        <source
                            media="(min-width: 640px) and (max-width: 767px)"
                            srcset="{ticket220Png} 1x, {ticket440Png} 2x"
                            type="image/png"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcset="{ticket260Png} 1x, {ticket520Png} 2x"
                            type="image/png"
                        />

                        <img src={ticket260Png} alt="Ticket" class="h-full object-cover" />
                    </picture>
                </a>
            </div>
        </div>
    </div>
{/if}
