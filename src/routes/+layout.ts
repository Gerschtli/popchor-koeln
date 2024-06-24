import { contact } from '$lib/sectionHeader';
import { getCacheVersion, initStoryblokApi, loadStory } from '$lib/storyblok/setup';

export async function load() {
    const storyblokApi = initStoryblokApi();
    const storyblokCacheVersion = await getCacheVersion(storyblokApi);

    const storyHome = await loadStory(storyblokApi, storyblokCacheVersion, 'home');
    const navigationItems =
        storyHome.content.body?.map((x) => ({
            id: x.id,
            title: x.title,
        })) ?? [];
    navigationItems.push(contact);

    return {
        storyblokApi,
        storyblokCacheVersion,
        storyHome,
        navigationItems,
    };
}
