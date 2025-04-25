import { dev } from '$app/environment';
import { PUBLIC_STORYBLOK_ACCESS_TOKEN } from '$env/static/public';
import type { PageStoryblok } from '$lib/component-types-storyblok';
import { components } from '$lib/components/storyblok';
import { apiPlugin, storyblokInit, useStoryblokApi, type ISbStoryData } from '@storyblok/svelte';

export const resolveRelations = ['gigs_reference.reference'];

export function initStoryblokApi() {
    storyblokInit({
        accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
        use: [apiPlugin],
        apiOptions: {
            https: true,
            cache: {
                clear: 'auto',
                type: 'none',
            },
            region: 'eu',
        },
        // @ts-expect-error wrong type definition in storyblok sdk
        components,
        bridge: true,
    });

    return useStoryblokApi();
}

export async function loadStory(storyblokApi: ReturnType<typeof initStoryblokApi>, story: string) {
    const dataStory = await storyblokApi.get(`cdn/stories/${story}`, {
        version: dev ? 'draft' : 'published',
        resolve_relations: resolveRelations,
        cv: 1, // disable cache
    });

    return dataStory.data.story as ISbStoryData<PageStoryblok>;
}
