export function getDimensionsOfImageUrl(filename: string) {
    const result = filename.match('^https://a\\.storyblok\\.com/f/\\d+/(\\d+)x(\\d+)/');

    if (result?.length !== 3) return {};

    return { width: result[1], height: result[2] };
}
