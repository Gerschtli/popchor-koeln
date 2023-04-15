<script lang="ts">
    export let label: string;
</script>

<div class="flex items-baseline text-neutral-600">
    <div class="mr-2 w-16 flex-shrink-0 text-right text-xs font-bold uppercase tracking-wide">
        {label}:
    </div>
    <slot />
</div>
