import { dev } from '$app/environment';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
    const { storyblokApi } = await parent();

    const dataStory = await storyblokApi.get('cdn/stories/imprint', {
        version: dev ? 'draft' : 'published',
    });

    return {
        story: dataStory.data.story,
    };
};
