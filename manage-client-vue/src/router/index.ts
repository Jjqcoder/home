// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router/dist/vue-router'

// 定义路由组件
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    // component: () => import('../views/Login.vue')

    // 临时修改
    component: () => import('../components/Layout/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 使用历史模式
  routes
})

export default router