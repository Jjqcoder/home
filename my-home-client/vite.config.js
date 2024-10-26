import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element-plus使用按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
})