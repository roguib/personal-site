// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react({ include: ['**/react/*', '**/*.jsx', '**/*.js'] })],
  output: 'static',
});
