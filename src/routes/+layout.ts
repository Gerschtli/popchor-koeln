import { initStoryblokApi } from '$lib/storyblok/setup';

export async function load() {
    return {
        storyblokApi: initStoryblokApi(),
    };
}
