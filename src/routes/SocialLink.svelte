<script lang="ts">
    import type { IconProps } from 'lucide-svelte';
    import type { SvelteComponent } from 'svelte';

    export let link: string;
    export let label: string;
    export let icon: typeof SvelteComponent<IconProps>;
</script>

<a
    class="block rounded-full bg-slate-700 p-3 text-slate-100 focus-within:outline-offset-2 hover:bg-slate-500 active:bg-slate-500"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
>
    <svelte:component this={icon} size={20} />
</a>
