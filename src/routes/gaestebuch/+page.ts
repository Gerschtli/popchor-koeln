import { schemaGuestbook } from '$lib/forms.js';
import { loadStory } from '$lib/storyblok/setup';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load({ parent, data }) {
    const { storyblokApi } = await parent();

    const [form, story] = await Promise.all([
        superValidate(zod(schemaGuestbook)),
        loadStory(storyblokApi, 'guestbook'),
    ]);

    return {
        form,
        story,

        ...data,
    };
}
