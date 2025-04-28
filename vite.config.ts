import tailwindcss from '@tailwindcss/vite';
import glsl from 'vite-plugin-glsl';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), glsl()]
});
