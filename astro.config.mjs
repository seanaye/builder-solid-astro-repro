import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  vite: {
    build: {
      target: 'esnext',
      polyfillDynamicImport: false,
    },
    ssr: {
      noExternal: ['@builder.io/sdk-solid'],
    },
    optimizeDeps: {
      // sub-dependencies of our sym-linked package must be manually included here
      include: ['solid-styled-components'],
      exclude: ['node-fetch'],
    },
    resolve: {
      // we must preserve symlinks for our sym-linked package to work properly
      preserveSymlinks: true,
    },
  }
});
