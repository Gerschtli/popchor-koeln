<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';
    import ContactForm from './ContactForm.svelte';
    import NewsletterForm from './NewsletterForm.svelte';

    export let data;
</script>

<StoryblokInit story={data.story} />

<Section id="kontakt" title="Kontakt">
    <NewsletterForm {data} />

    <ContactForm {data} />
</Section>
