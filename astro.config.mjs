// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide(), starlightImageZoom()],
			title: 'NximKB',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com' }],
			sidebar: [
				{
					label: 'NexaPad',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Information', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
