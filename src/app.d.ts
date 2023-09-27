import type { Sql } from 'postgres';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }

    declare module '*&imagetools' {
        const out: string;
        export default out;
    }

    // eslint-disable-next-line no-var
    var postgresClientCached: Sql;
}

export {};
