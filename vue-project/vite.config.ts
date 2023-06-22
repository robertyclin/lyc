import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lyc/vue-project',
  // build: {
  //   target: ['es2015']
  // },
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ['chrome >= 61', 'not IE < 11'],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
