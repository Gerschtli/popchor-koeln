<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import { contact } from '$lib/sectionHeader';
    import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';
    import ContactForm from './ContactForm.svelte';
    import NewsletterForm from './NewsletterForm.svelte';

    export let data;
</script>

<StoryblokInit story={data.storyHome} visualEditor={data.storyblokVisualEditor} />

<Section {...contact}>
    <NewsletterForm {data} />

    <ContactForm {data} />
</Section>
