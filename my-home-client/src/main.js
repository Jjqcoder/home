import { createApp } from 'vue'
// 将下方的css注释掉，element-plus的布局才可以生效
// import './style.css'
import App from './App.vue'
import router from './router' // 导入路由 

createApp(App).use(router).mount('#app')