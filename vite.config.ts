// Copyright © 2024 JalapenoLabs

import { defineConfig } from 'vite'

// Node.js
import { resolve } from 'path'

// Plugins
// https://www.npmjs.com/package/vite-tsconfig-paths
import tsconfigPaths from 'vite-tsconfig-paths'
// https://www.npmjs.com/package/vite-plugin-full-reload
import fullReload from 'vite-plugin-full-reload'

// https://vitejs.dev/config/

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    // Absolute imports:
    tsconfigPaths(),
    // Full reload when i18next en/translation.json changes:
    fullReload([
      resolve(
        process.cwd(),
        'public/locales/**/*.json'
      )
    ]),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @use 'sass:color'
        `,
      },
      scss: {
        additionalData: `
          @use 'sass:color';
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src')
    },
  },
})
