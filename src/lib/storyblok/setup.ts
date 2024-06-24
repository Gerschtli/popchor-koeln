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
            region: 'eu',
        },
        components,
        bridge: true,
    });

    return useStoryblokApi();
}

export async function getCacheVersion(storyblokApi: ReturnType<typeof initStoryblokApi>) {
    const response = await storyblokApi.get('cdn/spaces/me');

    if (!response.data?.space?.version) {
        return undefined;
    }

    return Number(response.data.space.version);
}

export async function loadStory(
    storyblokApi: ReturnType<typeof initStoryblokApi>,
    cacheVersion: undefined | number,
    story: string,
) {
    const dataStory = await storyblokApi.get(`cdn/stories/${story}`, {
        version: dev ? 'draft' : 'published',
        resolve_relations: resolveRelations,
        cv: cacheVersion,
    });

    return dataStory.data.story as ISbStoryData<PageStoryblok>;
}
