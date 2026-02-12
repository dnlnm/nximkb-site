// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';
import starlightBlog from 'starlight-blog';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          plugins: [starlightThemeRapide(), starlightImageZoom(), starlightBlog()],
          title: 'NximKB',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com' }],
          sidebar: [
              {
                  label: 'NexaPad',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Information', slug: 'nexapad/information' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  adapter: cloudflare(),
});