<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { X } from '@lucide/svelte';
    import { fly } from 'svelte/transition';

    interface Props {
        navigationItems: { id: string; title: string }[];
    }

    let { navigationItems }: Props = $props();

    $effect(() => {
        document.body.classList.toggle('overflow-hidden', page.state.openNavigation ?? false);
    });
</script>

<svelte:body
    onkeydown={(e) => {
        if (e.key === 'Escape' && page.state.openNavigation) {
            history.back();
        }
    }}
/>

{#if page.state.openNavigation}
    <nav class="fixed inset-0 z-10 bg-white/90" transition:fly={{ y: '100%', duration: 200 }}>
        <div class="relative container mx-auto p-8">
            <ul class="flex flex-col gap-4 p-4">
                {#each navigationItems as item (item.id)}
                    {@const href = `/#${item.id}`}
                    <li>
                        <a
                            class="hover:text-accent-dark active:text-accent-dark text-lg"
                            {href}
                            onclick={(e) => {
                                e.preventDefault();
                                goto(href, { replaceState: true });
                            }}
                        >
                            {item.title}
                        </a>
                    </li>
                {/each}
            </ul>

            <button aria-label="Menü schließen" class="absolute top-6 right-6 p-2" onclick={() => history.back()}>
                <X class="hover:text-slate-500" size={32} />
            </button>
        </div>
    </nav>
{/if}
