import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent }) {
    const { storyblokApi } = await parent();

    return {
        story: loadStory(storyblokApi, 'gigs'),
    };
}
