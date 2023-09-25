<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
    export let page: number;
</script>

<a
    href="?{data.pageParam}={page}#{data.paginationAnchor}"
    class="flex h-10 w-8 flex-shrink-0 items-center justify-center rounded-md text-xs xs:h-12 xs:w-10 xs:text-sm {page ===
    data.pagesCurrent
        ? 'bg-accent/60'
        : 'bg-slate-100 hover:bg-slate-200 focus:bg-slate-300'}"
>
    <slot />
</a>
