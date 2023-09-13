import { afterNavigate } from '$app/navigation';
import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

/**
 * Sets up a store that "closes" the modal when
 * - the escape key is pressed
 * - the browser back button is pressed
 * - a navigation takes place (clicking a link)
 *
 * Register global handlers like:
 *
 * <svelte:window on:popstate={modal.onPopstate} />
 * <svelte:body on:keydown={modal.onKeydown} />
 */
function modalStore(name: string) {
    const { set, subscribe } = writable({ isOpen: false });

    function close() {
        set({ isOpen: false });

        if (history.state === name) {
            history.back();
        }
    }

    function open() {
        set({ isOpen: true });

        history.pushState(name, '', '');
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            close();
        }
    }

    afterNavigate(close);

    return { open, close, subscribe, onKeydown, onPopstate: close };
}

type ModalStore = ReturnType<typeof modalStore>;

const contextName = 'navigation-modal';

export function initNavigationModal() {
    setContext<ModalStore>(contextName, modalStore('navigation-open'));
}

export function getNavigationModal() {
    return getContext<ModalStore>(contextName);
}
