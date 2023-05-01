import { dev } from '$app/environment';

export async function load({ parent }) {
    const { storyblokApi } = await parent();

    const dataStory = await storyblokApi.get('cdn/stories/gigs', {
        version: dev ? 'draft' : 'published',
        resolve_relations: ['gigs_reference.reference'],
    });

    return {
        story: dataStory.data.story,
    };
}
