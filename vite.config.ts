import { resolve } from 'path'
// 使用 defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
import { defineConfig } from 'vite'
// 提供 Vue 3 单文件组件支持
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      // 设置 `@` 指向 `src` 目录
      '@': resolve(process.cwd(), 'src'),
    },
  },
})
