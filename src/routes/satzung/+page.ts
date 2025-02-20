import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent }) {
    const { storyblokApi, storyblokCacheVersion } = await parent();

    return {
        story: await loadStory(storyblokApi, storyblokCacheVersion, 'satzung'),
    };
}
