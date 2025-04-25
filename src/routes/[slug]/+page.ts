import { loadStory } from '$lib/storyblok/setup';
import { error } from '@sveltejs/kit';

function getStorySlug(slug: string) {
    switch (slug) {
        case 'datenschutz':
            return 'privacy';
        case 'impressum':
            return 'imprint';
        case 'satzung':
            return 'satzung';
        case 'termine':
            return 'gigs';
        default:
            error(404);
    }
}

export async function load({ parent, params }) {
    const { storyblokApi, storyblokVisualEditor } = await parent();

    const story = getStorySlug(params.slug);

    return {
        story: await loadStory(storyblokApi, storyblokVisualEditor, story),
    };
}
