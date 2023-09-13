import { schemaContact, schemaNewsletter } from '$lib/forms';
import { loadStory } from '$lib/storyblok/setup';
import { superValidate } from 'sveltekit-superforms/client';

export async function load({ parent }) {
    const { storyblokApi } = await parent();

    return {
        story: loadStory(storyblokApi, 'home'),
        formContact: superValidate(schemaContact),
        formNewsletter: superValidate(schemaNewsletter),
    };
}
