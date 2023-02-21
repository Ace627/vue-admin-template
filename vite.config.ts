import { resolve } from 'path'
// 使用 defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite' // 把你需要的组件的 css 或者 sass 文件自动引入进来
import Components from 'unplugin-vue-components/vite' // 配置 Element Plus 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 提供 Vue 3 单文件组件支持
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({}),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      // 设置 `@` 指向 `src` 目录
      '@': resolve(process.cwd(), 'src'),
    },
  },
})
