import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
    plugins: [tailwindcss(), sveltekit(), imagetools(), basicSsl()],
    server: {
        https: {},
    },
});
