import { dev } from '$app/environment';

export async function load({ parent }) {
    const { storyblokApi } = await parent();

    const dataStory = await storyblokApi.get('cdn/stories/imprint', {
        version: dev ? 'draft' : 'published',
    });

    return {
        story: dataStory.data.story,
    };
}
