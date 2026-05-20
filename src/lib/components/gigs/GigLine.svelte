<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        label: string;
        children?: Snippet;
    }

    let { label, children }: Props = $props();
</script>

<div class="flex items-baseline text-neutral-600">
    <div class="mr-2 w-16 shrink-0 text-right text-xs font-bold tracking-wider uppercase">
        {label}:
    </div>
    {@render children?.()}
</div>
