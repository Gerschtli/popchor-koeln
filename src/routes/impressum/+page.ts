import { loadStory } from '$lib/storyblok/setup';

export async function load({ parent }) {
    const { storyblokApi, storyblokVisualEditor } = await parent();

    return {
        story: await loadStory(storyblokApi, storyblokVisualEditor, 'imprint'),
    };
}
