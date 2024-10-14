import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/Login.vue'
import MainCom from '../components/MainCom.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: MainCom
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
