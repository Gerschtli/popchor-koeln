import { schemaGuestbook } from '$lib/forms.js';
import { loadStory } from '$lib/storyblok/setup';
import { superValidate } from 'sveltekit-superforms/server';

export async function load({ parent, data }) {
    const { storyblokApi } = await parent();

    const [form, story] = await Promise.all([superValidate(schemaGuestbook), loadStory(storyblokApi, 'guestbook')]);

    return {
        form,
        story,

        ...data,
    };
}
