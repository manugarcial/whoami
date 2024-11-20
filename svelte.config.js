import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessors
	preprocess: [
		vitePreprocess({
			style: {
				scss: {
					// Add your SCSS options here (optional)
					// Example: `prependData` to inject global SCSS variables or mixins
					prependData: `@import 'src/styles/variables.scss';`
				}
			}
		}),
		mdsvex()
	],

	kit: {
		// Adapter configuration
		adapter: adapter()
	},

	// File extensions for components
	extensions: ['.svelte', '.svx']
};

export default config;
