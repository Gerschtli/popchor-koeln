<script lang="ts">
    import type { Component } from 'svelte';

    interface Props {
        link: string;
        label: string;
        icon: Component<{ size: number }>;
    }

    let { link, label, icon }: Props = $props();

    const SvelteComponent = $derived(icon);
</script>

<a
    class="block rounded-full bg-slate-700 p-3 text-slate-100 focus-within:outline-offset-2 hover:bg-slate-500 active:bg-slate-500"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
>
    <SvelteComponent size={20} />
</a>
