// Copyright © 2024 JalapenoLabs

import { defineConfig } from 'vite'

// Node.js
import { resolve } from 'path'

// Plugins
import react from '@vitejs/plugin-react-swc'
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
    // React language + JSX:
    react(),
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
          @use '@/sass/theme.sass' as *
          @use 'sass:color'
        `,
      },
      scss: {
        additionalData: `
          @use '@/sass/theme.sass' as *;
          @use 'sass:color';
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
  },
})
