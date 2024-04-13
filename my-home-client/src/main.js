import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 导入路由 
import ElementPlus from 'element-plus' // 引入Element-Plus


createApp(App).use(router).use(ElementPlus).mount('#app')