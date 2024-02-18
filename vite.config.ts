import { defineConfig } from 'vite'

import Unocss from 'unocss/vite'


export default defineConfig({
  logLevel: 'info',
  optimizeDeps: {
    exclude: [
      // '@vueuse/core',
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    // https://github.com/antfu/vite-plugin-components
    

    

    // https://github.com/unocss/unocss
    Unocss(),
  ],
})
