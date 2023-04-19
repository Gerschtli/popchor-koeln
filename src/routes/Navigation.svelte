<script lang="ts">
    import { browser } from '$app/environment';
    import { modalStore } from '$lib/modal';
    import { X } from 'lucide-svelte';
    import { fly } from 'svelte/transition';

    let navigationModal = modalStore('navigation-open');

    $: if (browser) document.body.classList.toggle('overflow-hidden', $navigationModal.isOpen);

    export const openNavigation = navigationModal.open;

    const navigationItems = [
        { href: '/#chor', text: 'Chor' },
        { href: '/#chorleiter', text: 'Chorleiter' },
        { href: '/#termine', text: 'Termine' },
        { href: '/#kontakt', text: 'Kontakt' },
    ];
</script>

<svelte:window on:popstate={navigationModal.onPopstate} />
<svelte:body on:keydown={navigationModal.onKeydown} />

{#if $navigationModal.isOpen}
    <nav class="fixed inset-0 z-10 bg-white/90" transition:fly={{ y: '100%', duration: 200 }}>
        <div class="container relative mx-auto p-8">
            <ul class="flex flex-col gap-4 p-4">
                {#each navigationItems as item}
                    <li>
                        <a class="text-lg hover:text-accent active:text-accent" href={item.href}>{item.text}</a>
                    </li>
                {/each}
            </ul>

            <button aria-label="Menü schließen" class="absolute right-6 top-6 p-2" on:click={navigationModal.close}>
                <X class="hover:text-slate-500" size={32} />
            </button>
        </div>
    </nav>
{/if}
