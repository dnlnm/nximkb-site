// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';
import starlightBlog from 'starlight-blog';
import starlightScrollToTop from 'starlight-scroll-to-top';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [starlightThemeRapide(), starlightImageZoom(), starlightBlog({ navigation: 'header-end' }), starlightScrollToTop()],
            title: 'NximKB',
            favicon: './public/icon.png',
            lastUpdated: true,
            customCss: ['./src/styles/custom.css'],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com' }],
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Documentation', slug: 'docs' },
                    ],
                },
                {
                    label: 'NexaPad',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Information', slug: 'nexapad/information' },
                        { label: 'Interest Check', slug: 'nexapad/interest-check' },
                        { label: 'Group Buy', slug: 'nexapad/group-buy' },
                        { label: 'Useful Links', slug: 'nexapad/useful-links' },
                        {
                            label: 'Guide', items: [
                                { label: 'Assembly', slug: 'nexapad/guide/assembly' },
                                { label: 'Firmware', slug: 'nexapad/guide/firmware' },
                            ]
                        },
                    ],
                },
                {
                    label: 'Cloak-XT',
                    items: [
                        { label: 'Information', slug: 'cloak-xt/information' },
                    ],
                },
                {
                    label: 'Pulse FRL',
                    items: [
                        { label: 'Information', slug: 'pulse-frl/information' },
                    ],
                }
            ],
        }),
    ],

    adapter: cloudflare(),
});