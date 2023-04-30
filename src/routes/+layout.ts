import { PUBLIC_STORYBLOK_ACCESS_TOKEN } from '$env/static/public';
import Page from '$lib/components/storyblok/Page.svelte';
import Section from '$lib/components/storyblok/Section.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
    storyblokInit({
        accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
        use: [apiPlugin],
        apiOptions: {
            region: 'eu',
        },
        components: {
            page: Page,
            section: Section,
        },
    });
    const storyblokApi = useStoryblokApi();

    return {
        storyblokApi,
    };
};
