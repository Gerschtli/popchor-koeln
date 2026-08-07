import {
    renderRichText as renderRichTextBase,
    type SbRichTextInput,
    type SbRichTextRenderContext,
} from '@storyblok/richtext';

import type { StoryblokRichtext } from '$storyblok/storyblok';

const options: SbRichTextRenderContext = {
    renderers: {
        link: ({ attrs, children }) => {
            const href = attrs?.href ?? '';
            const target = attrs?.target;

            let attrString = `href="${href}"`;

            if (target && target !== '_self') {
                attrString += ` target="${target}"`;
            }

            if (!href.startsWith('/')) {
                attrString += ` rel="noopener noreferrer"`;
            }

            return `<a ${attrString}>${children}</a>`;
        },
    },
};

export function renderRichText(blok: StoryblokRichtext) {
    return renderRichTextBase(blok as unknown as SbRichTextInput, options);
}
