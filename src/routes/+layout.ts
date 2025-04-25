import { contact } from '$lib/sectionHeader';
import { initStoryblokApi, loadStory } from '$lib/storyblok/setup';

export async function load({ url }) {
    const storyblokApi = initStoryblokApi();
    const storyblokVisualEditor = url.searchParams.has('_storyblok');

    const storyHome = await loadStory(storyblokApi, storyblokVisualEditor, 'home');
    const navigationItems =
        storyHome.content.body?.map((x) => ({
            id: x.id,
            title: x.title,
        })) ?? [];
    navigationItems.push(contact);

    return {
        storyblokApi,
        storyblokVisualEditor,
        storyHome,
        navigationItems,
    };
}
