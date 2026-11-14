import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            // Consult https://kit.svelte.dev/docs/integrations#preprocessors
            // for more information about preprocessors
            preprocess: [vitePreprocess()],
            adapter: adapter(),
            alias: {
                // an alias ending /* will only match
                // the contents of a directory, not the directory itself
                '$storyblok/*': '.storyblok/types/*',
            },
        }),
        imagetools(),
        basicSsl(),
    ],
    server: { https: {} },
});
