<script lang="ts">
    export let id: string | null = null;
    export let title: string;
    export let classContent: string | null = null;
</script>

<section {id} class="container mx-auto my-8 p-4">
    <hgroup
        class="
            before:-z-1 relative mb-6 flex justify-center
            before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-slate-500
        "
    >
        <h2 class="relative bg-white px-8 font-heading text-3xl first-letter:text-accent">{title}</h2>
    </hgroup>

    <div class="px-4 sm:px-8 lg:px-16 [&_p]:text-gray {classContent}">
        <slot />
    </div>
</section>
