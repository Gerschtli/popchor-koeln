import { PUBLIC_STORYBLOK_ACCESS_TOKEN } from '$env/static/public';
import Gig from '$lib/components/storyblok/Gig.svelte';
import Page from '$lib/components/storyblok/Page.svelte';
import Section from '$lib/components/storyblok/Section.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
    storyblokInit({
        accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
        use: [apiPlugin],
        apiOptions: {
            region: 'eu',
        },
        components: {
            gig: Gig,
            page: Page,
            section: Section,
        },
    });
    const storyblokApi = useStoryblokApi();

    return {
        storyblokApi,
    };
}
