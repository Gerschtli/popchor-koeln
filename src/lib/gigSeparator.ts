import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const contextName = 'gigSeparator';

export function initGigSeparator() {
    setContext(contextName, writable(new Map<string, number>()));
}

export function getGigSeparator() {
    return getContext<Writable<Map<string, number>> | undefined>(contextName);
}
