<script lang="ts">
    import ticket160Png from '$lib/assets/ticket.png?h=160&format=png&imagetools';
    import ticket160Webp from '$lib/assets/ticket.png?h=160&format=webp&imagetools';
    import ticket240Png from '$lib/assets/ticket.png?h=240&format=png&imagetools';
    import ticket240Webp from '$lib/assets/ticket.png?h=240&format=webp&imagetools';
    import ticket320Png from '$lib/assets/ticket.png?h=320&format=png&imagetools';
    import ticket320Webp from '$lib/assets/ticket.png?h=320&format=webp&imagetools';
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    import { X } from 'lucide-svelte';
    import { fade } from 'svelte/transition';
    const localStorageKey = 'gigPopupClosed';
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
        class="fixed bottom-2 left-2 right-2 z-20 flex flex-col items-center bg-white/75 p-1 text-neutral-600 shadow-sm shadow-accent-dark sm:left-auto sm:max-w-lg"
    >
        <button aria-label="Popup schließen" class="self-end" on:click={close}>
            <X class="hover:text-slate-500" size={32} />
        </button>
        <div>
            <a
                href="https://popchorkoeln.ticket.io/97njwxm6/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <picture>
                    <source
                    media="(max-width: 639px)"
                    srcset="{ticket160Webp} 1x, {ticket320Webp} 2x"
                    type="image/webp"
                />
                    <source media="(min-width: 640px) and (max-width: 767px)" srcset={ticket240Webp} type="image/webp" />
                    <source media="(min-width: 768px)" srcset={ticket320Webp} type="image/webp" />

                    <source
                        media="(max-width: 639px)"
                        srcset="{ticket160Png} 1x, {ticket320Png} 2x"
                        type="image/png"
                    />
                    <source media="(min-width: 640px) and (max-width: 767px)" srcset={ticket240Png} type="image/png" />
                    <source media="(min-width: 768px)" srcset={ticket320Png} type="image/png" />

                    <img src={ticket320Png} alt="Ticket" class="h-full object-cover" />
                </picture>
            </a>
        </div>
    </div>
{/if}