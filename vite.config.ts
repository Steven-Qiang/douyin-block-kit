import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'
import pkg from './package.json'

export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: '抖音搜索自动拉黑',
        namespace: 'douyin-block-kit',
        version: pkg.version,
        description: pkg.description,
        author: pkg.author,
        icon: '🚫',
        match: ['https://www.douyin.com/*'],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
})
