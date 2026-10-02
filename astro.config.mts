import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://johnkronenberg.github.io',
	base: 'astro-photography-portfolio',
	vite: {
		plugins: [tailwindcss()],
	},
});
