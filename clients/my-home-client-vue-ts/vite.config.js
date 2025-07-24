import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

/*
此 Vite 配置文件针对项目打包做了以下优化：

1. **按需自动导入优化**
   - 使用 `unplugin-auto-import` 自动导入 Vue API
   - 使用 `unplugin-vue-components` 自动按需导入 Element Plus 组件

2. **生产环境专属优化**
   - 只在生产环境启用 `rollup-plugin-visualizer` 打包分析工具
   - 可视化分析打包体积（显示 gzip 和 brotli 压缩大小）

3. **代码压缩优化**
   - 使用 `terser` 进行代码压缩
   - 移除所有 `console.log` 和 `debugger` 语句

4. **依赖分包策略**
   - 将 node_modules 依赖按模块拆分为独立 chunk
   - 避免单个 vendor 文件过大的问题

5. **文件输出优化**
   - 使用哈希命名解决缓存问题
   - 分类存放资源文件（js/css/assets）
   - 精简文件名格式（`[name]-[hash]`）

6. **CSS 处理优化**
   - 启用 CSS 代码分割（cssCodeSplit: true）
   - 配置 Less 预处理器支持数学运算

7. **其他优化**
   - 禁用 sourcemap 减少构建体积（sourcemap: false）
   - 条件加载插件避免开发环境不必要的处理

这些优化共同作用实现了：减小打包体积、提高加载性能、改善缓存策略、优化开发体验等目标。
*/


export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // 打包分析工具（只在生产环境使用）
    mode === 'production' && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: 'always'
      }
    }
  },
  build: {
    // 生产环境构建配置
    minify: 'terser', // 使用 terser 进行代码压缩
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console.log
        drop_debugger: true // 移除 debugger
      }
    },
    rollupOptions: {
      output: {
        // 代码分割配置
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 将 node_modules 中的依赖单独打包
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
        // 更小的 chunk 文件命名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件
    sourcemap: false
  }
}))