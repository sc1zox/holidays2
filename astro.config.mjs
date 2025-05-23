import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

export default defineConfig({
  viewTransitions: true,
  integrations: [svelte()],
});