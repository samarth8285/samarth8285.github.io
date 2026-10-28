// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deployed as a GitHub Pages PROJECT site (repo kept its own name
  // rather than being renamed to samarth8285.github.io), so it's served
  // from a subpath, not the domain root. If the repo is ever renamed to
  // samarth8285.github.io, or a custom domain is attached, remove the
  // `base` line entirely and update `site` accordingly — all asset
  // references in the codebase resolve through BASE_URL, so no other
  // changes would be needed.
  site: 'https://samarth8285.github.io',
  base: '/',
});
