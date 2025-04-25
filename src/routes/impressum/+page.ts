import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent }) {
    const { storyblokApi } = await parent();

    return {
        story: await loadStory(storyblokApi, 'imprint'),
    };
}
