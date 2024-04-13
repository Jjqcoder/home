// 导入 Vue Router  
import { createRouter, createWebHistory } from 'vue-router';

// 导入需要路由的组件  
import HelloWorld from './../components/HelloWorld.vue' // 欢迎组件
import Layout from './../components/Layout.vue' // 布局组件

// 定义路由  
const routes = [{
  path: '/',
  name: 'layout',
  component: Layout
},
{
  path: '/hello',
  name: 'HelloWorld',
  component: HelloWorld
}
];

// 创建 router 实例  
const router = createRouter({
  history: createWebHistory(),
  routes // (缩写) 相当于 routes: routes  
});

export default router;