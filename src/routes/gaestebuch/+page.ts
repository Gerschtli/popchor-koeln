import { schemaGuestbook } from '$lib/forms.js';
import { loadStory } from '$lib/storyblok/setup';
import { superValidate } from 'sveltekit-superforms/server';

export async function load({ parent, data }) {
    const { storyblokApi } = await parent();

    return {
        form: superValidate(schemaGuestbook),
        story: loadStory(storyblokApi, 'guestbook'),

        ...data,
    };
}
