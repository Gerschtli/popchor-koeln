<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
    import { onMount } from 'svelte';
    import ContactForm from './ContactForm.svelte';
    import NewsletterForm from './NewsletterForm.svelte';

    export let data;

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

<Section id="kontakt" title="Kontakt">
    <NewsletterForm {data} />

    <ContactForm {data} />
</Section>
