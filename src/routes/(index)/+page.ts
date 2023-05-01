import { dev } from '$app/environment';
import { schemaContact, schemaNewsletter } from '$lib/forms';
import { FormId } from '$lib/types';
import { superValidate } from 'sveltekit-superforms/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
    const { storyblokApi } = await parent();

    const dataStory = await storyblokApi.get('cdn/stories/home', {
        version: dev ? 'draft' : 'published',
    });

    return {
        story: dataStory.data.story,
        formContact: superValidate(schemaContact, { id: FormId.contact }),
        formNewsletter: superValidate(schemaNewsletter, { id: FormId.newsletter }),
    };
};
