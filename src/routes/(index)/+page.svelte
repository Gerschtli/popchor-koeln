<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import { contact, audition } from '$lib/sectionHeader';
    import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';
    import AuditionSection from './AuditionSection.svelte';
    import ContactForm from './ContactForm.svelte';
    import NewsletterForm from './NewsletterForm.svelte';

    let { data } = $props();
</script>

<StoryblokInit story={data.storyHome} visualEditor={data.storyblokVisualEditor} />

<Section {...audition}>
    <AuditionSection {data} />
</Section>
<Section {...contact}>
    <NewsletterForm {data} />

    <ContactForm {data} />
</Section>
