// vite-env.d.ts

/*

1. **TypeScript 默认不认识 `.vue` 文件** —— 它需要明确知道这类文件导出的类型。  
2. **声明 `*.vue` 模块** —— 告诉 TypeScript：**所有 `.vue` 文件** 导出的都是一个 Vue 组件（`DefineComponent` 类型）。  
3. **`DefineComponent` 是 Vue 3 的组件类型** —— 它定义了组件的 props、setup、methods 等类型，让 TypeScript 能正确推导。  

**简单总结**：加了这段代码后，TypeScript 就知道 `.vue` 文件是一个合法的 Vue 组件，不再报 "找不到模块" 或 "类型错误"。

*/
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}