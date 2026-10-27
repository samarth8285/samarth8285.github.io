// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Root deployment (GitHub Pages user site or a custom domain), so no
  // `base` path is set — if this repo is renamed to samarth8285.github.io
  // this is already correct; if a custom domain is used instead, update
  // this to that domain and add a `public/CNAME` file containing it.
  site: 'https://samarth8285.github.io',
});
