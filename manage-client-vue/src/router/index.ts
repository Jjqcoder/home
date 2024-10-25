/*
 * @Author: 江建清 1810422805@qq.com
 * @Date: 2024-10-10 20:23:46
 * @LastEditors: 江建清 1810422805@qq.com
 * @LastEditTime: 2024-10-25 22:36:21
 * @FilePath: \manage-client-vue\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/Login.vue'
import MainCom from '../components/MainCom.vue'
import ArticalCom from '@/components/ArticalCom.vue'
import DemoCom from '@/components/DemoCom.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: MainCom,
    children: [  
      {  
        path: 'article', // 空字符串表示默认子路由  
        name: 'article',  
        component: ArticalCom
      }, {
        path: 'demo', // 空字符串表示默认子路由  
        name: 'demo',  
        component: DemoCom
      }
    ]  
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
