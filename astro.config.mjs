// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Tentukan apakah kita sedang dalam mode build untuk GitHub Pages atau development
// Anda bisa menggunakan variabel lingkungan lain jika lebih sesuai dengan alur kerja Anda
const IS_GITHUB_PAGES_BUILD = process.env.NODE_ENV === 'production'; // Contoh sederhana, bisa disesuaikan

export default defineConfig({
  output: 'static',

  // (PENTING) Setel URL utama situs Anda di sini
  // Ganti '<USERNAME>' dengan username GitHub Anda.
  site: 'https://monesia.github.io',

  // (PENTING) Atur 'base' hanya untuk build produksi ke GitHub Pages subdirectory
  // Saat development, 'base' akan menjadi '/'
  base: IS_GITHUB_PAGES_BUILD ? '/monesia.github.io/' : '/',

  integrations: [mdx(), sitemap()],
});