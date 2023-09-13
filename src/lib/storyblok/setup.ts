import { dev } from '$app/environment';
import { PUBLIC_STORYBLOK_ACCESS_TOKEN } from '$env/static/public';
import { components } from '$lib/components/storyblok';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export function initStoryblokApi() {
    storyblokInit({
        accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
        use: [apiPlugin],
        apiOptions: {
            region: 'eu',
        },
        components,
    });

    return useStoryblokApi();
}

export async function loadStory(storyblokApi: ReturnType<typeof initStoryblokApi>, story: string) {
    const dataStory = await storyblokApi.get(`cdn/stories/${story}`, {
        version: dev ? 'draft' : 'published',
        resolve_relations: ['gigs_reference.reference'],
    });

    return dataStory.data.story;
}
