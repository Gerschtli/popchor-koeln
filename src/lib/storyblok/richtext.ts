import { MarkTypes, type StoryblokRichTextNode, richTextResolver } from '@storyblok/richtext';

import type { StoryblokRichtext } from '$storyblok/storyblok';

const richText = richTextResolver({
    resolvers: {
        [MarkTypes.LINK]: (node) => {
            const href = node.attrs?.['href'];
            const target = node.attrs?.['target'];

            let attrs = `href="${href}"`;

            if (target && target !== '_self') {
                attrs += ` target="${target}"`;
            }

            if (!href.startsWith('/')) {
                attrs += ` rel="noopener noreferrer"`;
            }

            return `<a ${attrs}>${node.text}</a>`;
        },
    },
});

export function renderRichText(blok: StoryblokRichtext) {
    return richText.render(blok as unknown as StoryblokRichTextNode);
}
