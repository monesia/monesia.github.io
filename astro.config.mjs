// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'static',
  base: '/monesia.github.io/', // Sesuaikan dengan nama repository Anda
	//site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});