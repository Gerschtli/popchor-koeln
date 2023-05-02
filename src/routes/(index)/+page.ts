import { schemaContact, schemaNewsletter } from '$lib/forms';
import { loadStory } from '$lib/storyblok/setup';
import { FormId } from '$lib/types';
import { superValidate } from 'sveltekit-superforms/client';

export async function load({ parent }) {
    const { storyblokApi } = await parent();

    return {
        story: loadStory(storyblokApi, 'home'),
        formContact: superValidate(schemaContact, { id: FormId.contact }),
        formNewsletter: superValidate(schemaNewsletter, { id: FormId.newsletter }),
    };
}
