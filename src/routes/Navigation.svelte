<script lang="ts">
    import { browser } from '$app/environment';
    import { getNavigationModal } from '$lib/modal';
    import { X } from '@lucide/svelte';
    import { fly } from 'svelte/transition';

    interface Props {
        navigationItems: { id: string; title: string }[];
    }

    let { navigationItems }: Props = $props();

    const navigationModal = getNavigationModal();

    $effect(() => {
        if (browser) document.body.classList.toggle('overflow-hidden', $navigationModal.isOpen);
    });
</script>

<svelte:window onpopstate={navigationModal.onPopstate} />
<svelte:body onkeydown={navigationModal.onKeydown} />

{#if $navigationModal.isOpen}
    <nav class="fixed inset-0 z-10 bg-white/90" transition:fly={{ y: '100%', duration: 200 }}>
        <div class="relative container mx-auto p-8">
            <ul class="flex flex-col gap-4 p-4">
                {#each navigationItems as item (item.id)}
                    <li>
                        <a class="hover:text-accent-dark active:text-accent-dark text-lg" href="/#{item.id}">
                            {item.title}
                        </a>
                    </li>
                {/each}
            </ul>

            <button aria-label="Menü schließen" class="absolute top-6 right-6 p-2" onclick={navigationModal.close}>
                <X class="hover:text-slate-500" size={32} />
            </button>
        </div>
    </nav>
{/if}
