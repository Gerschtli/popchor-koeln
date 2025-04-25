<script lang="ts">
    export let id: string | null = null;
    export let title: string;
</script>

<section {id} class="container mx-auto my-8 p-4">
    <hgroup
        class="
            relative mb-6 flex justify-center before:absolute
            before:inset-x-0 before:top-1/2 before:-z-1 before:h-px before:bg-slate-500
        "
    >
        <h2 class="font-heading first-letter:text-accent relative bg-white px-8 text-3xl">{title}</h2>
    </hgroup>

    <div class="space-y-4 px-4 sm:px-8 lg:px-16">
        <slot />
    </div>
</section>
