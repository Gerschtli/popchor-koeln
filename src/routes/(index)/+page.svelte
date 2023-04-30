<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import GigList from '$lib/components/gigs/GigList.svelte';
    import { gigs } from '$lib/data/gigs';
    import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
    import { ChevronRight } from 'lucide-svelte';
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    import ContactForm from './ContactForm.svelte';
    import NewsletterForm from './NewsletterForm.svelte';

    export let data: PageData;

    const gigCount = 6;
    const now = Date.now();
    const gigsIndexPage = gigs.filter((gig) => gig.date.getTime() >= now).slice(0, gigCount);

    onMount(() => {
        useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
    });
</script>

<svelte:head>
    <title>Startseite - popCHORköln</title>
    <meta
        name="description"
        content="Der popCHORköln, ehemals d'acCHORd, besteht aus rund 60 Sänger:innen aus Köln und Umgebung."
    />
</svelte:head>

{#if data.story}
    <StoryblokComponent blok={data.story.content} />
{/if}

<Section id="termine" title="Termine">
    <GigList gigs={gigsIndexPage} />

    <div class="mt-2 flex items-center justify-end">
        <a
            class="inline-flex text-sm text-accent hover:text-accent-dark focus:text-accent-dark"
            href="/termine"
            data-sveltekit-preload-data
        >
            zu allen Terminen <ChevronRight class="inline" size={20} />
        </a>
    </div>
</Section>

<Section id="kontakt" title="Kontakt">
    <NewsletterForm {data} />

    <ContactForm {data} />
</Section>
