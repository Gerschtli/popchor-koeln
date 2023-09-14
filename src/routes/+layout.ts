import { contact } from '$lib/sectionHeader';
import { initStoryblokApi, loadStory } from '$lib/storyblok/setup';

export async function load() {
    const storyblokApi = initStoryblokApi();

    const storyHome = await loadStory(storyblokApi, 'home');
    const navigationItems = storyHome.content.body.map((x) => ({
        id: x.id,
        title: x.title,
    }));
    navigationItems.push(contact);

    return {
        storyblokApi,
        storyHome,
        navigationItems,
    };
}
