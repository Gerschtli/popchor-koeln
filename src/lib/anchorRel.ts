export function anchorRel(node: HTMLElement) {
    const anchors = node.getElementsByTagName('a');
    const base = `${window.location.protocol}//${window.location.host}`;

    function isExternalLink(url: string) {
        return !url?.startsWith('/') && !url?.startsWith(base);
    }

    for (const anchor of anchors) {
        if (isExternalLink(anchor.href)) {
            anchor.rel = 'noopener noreferrer';
        }
    }
}
