<script lang="ts">
    import ticket180Png from '$lib/assets/ticket.png?h=180&format=png&imagetools'; //171
    import ticket180Webp from '$lib/assets/ticket.png?h=180&format=webp&imagetools';
    import ticket220Png from '$lib/assets/ticket.png?h=220&format=png&imagetools'; //204
    import ticket220Webp from '$lib/assets/ticket.png?h=220&format=webp&imagetools';
    import ticket260Png from '$lib/assets/ticket.png?h=260&format=png&imagetools'; //307
    import ticket260Webp from '$lib/assets/ticket.png?h=260&format=webp&imagetools';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { X } from 'lucide-svelte';
    import { fade } from 'svelte/transition';
    const localStorageKey = 'gigTwPckPopupClosed';
    const hideAfterDate = new Date('2025-05-17T20:00:00+0100');
    $: closed = !browser || localStorage.getItem(localStorageKey) || new Date() > hideAfterDate;
    function close() {
        closed = true;
        localStorage.setItem(localStorageKey, 'true');
    }

    let mounted = false;
    onMount(() => {
        mounted = true;
    });
</script>

{#if !closed && mounted}
    <div
        transition:fade
        class="fixed bottom-2 left-2 right-2 z-20 flex flex-col items-center bg-white/75 p-1 text-neutral-600 shadow-lg shadow-accent-dark sm:left-auto sm:max-w-lg"
    >
        <button aria-label="Popup schließen" class="self-end" on:click={close}>
            <X class="hover:text-slate-500" size={32} />
        </button>
        <div>
            <a href="https://popchorkoeln.ticket.io/97njwxm6/" target="_blank" rel="noopener noreferrer">
                <picture>
                    <source
                        media="(max-width: 639px)"
                        srcset="{ticket180Webp} 1x, {ticket260Webp} 2x"
                        type="image/webp"
                    />
                    <source
                        media="(min-width: 640px) and (max-width: 767px)"
                        srcset={ticket220Webp}
                        type="image/webp"
                    />
                    <source media="(min-width: 768px)" srcset={ticket260Webp} type="image/webp" />

                    <source media="(max-width: 639px)" srcset="{ticket180Png} 1x, {ticket260Png} 2x" type="image/png" />
                    <source media="(min-width: 640px) and (max-width: 767px)" srcset={ticket220Png} type="image/png" />
                    <source media="(min-width: 768px)" srcset={ticket260Png} type="image/png" />

                    <img src={ticket260Png} alt="Ticket" class="h-full object-cover" />
                </picture>
            </a>
        </div>
    </div>
{/if}
