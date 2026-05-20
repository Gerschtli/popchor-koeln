// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        interface PageState {
            openNavigation?: boolean;
        }
        // interface Platform {}
    }

    declare module '*&imagetools' {
        const out: string;
        export default out;
    }
}

export {};
