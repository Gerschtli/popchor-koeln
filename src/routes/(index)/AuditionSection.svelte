<script lang="ts">
    import RichTextSimple from '$lib/components/storyblok/richtext/RichTextSimple.svelte';
    import type { PageData } from './$types';

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    const id = 'audition';
</script>

<div {id} class="space-y-2 [&>p]:text-neutral-600">
    <RichTextSimple content={data.storyHome.content.auditionText} />
    {#if data.storyHome.content.showAuditionLink}
        <a
            href={data.storyHome.content.auditionLink?.url}
            target="_blank"
            rel="noopener noreferrer"
            class="
        bg-accent hover:bg-accent-dark flex w-full items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-100
        ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
        >
            Jetzt bewerben!
        </a>
    {/if}
</div>
