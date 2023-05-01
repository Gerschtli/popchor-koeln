import { dev } from '$app/environment';
import { schemaContact, schemaNewsletter } from '$lib/forms';
import { FormId } from '$lib/types';
import { superValidate } from 'sveltekit-superforms/client';

export async function load({ parent }) {
    const { storyblokApi } = await parent();

    const dataStory = await storyblokApi.get('cdn/stories/home', {
        version: dev ? 'draft' : 'published',
        resolve_relations: ['gigs_reference.reference'],
    });

    return {
        story: dataStory.data.story,
        formContact: superValidate(schemaContact, { id: FormId.contact }),
        formNewsletter: superValidate(schemaNewsletter, { id: FormId.newsletter }),
    };
}
