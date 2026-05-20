import type { StoryblokAsset } from '$storyblok/storyblok';
import { type SbBlokData, storyblokEditable as storyblokEditableOriginal } from '@storyblok/svelte';

export function getDimensionsOfImageUrl(asset: StoryblokAsset) {
    const result = asset.filename?.match('^https://a\\.storyblok\\.com/f/\\d+/(\\d+)x(\\d+)/');

    if (result?.length !== 3) return {};

    return { width: result[1], height: result[2] };
}

type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K];
};

export function storyblokEditable(node: HTMLElement, value: RemoveIndex<SbBlokData>) {
    return storyblokEditableOriginal(node, value);
}
