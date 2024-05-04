// 导入 Vue Router  
import { createRouter, createWebHistory } from 'vue-router';

// 导入需要路由的组件  
// import HelloWorld from './../components/HelloWorld.vue' // 欢迎组件
import Layout from './../components/Layout.vue'; // 布局组件
import WorldCom from './../components/world/index.vue';
import BlogCom from './../components/blog/index.vue';
import EnglishCom from './../components/english/index.vue';
import AboutCom from './../components/about/index.vue';
import WeatherCom from './../components/weather/index.vue';
// import WriteBlogCom from './../components/writeBlog/index.vue'

// 定义路由  
const routes = [{
  path: '/',
  name: 'layout',
  component: Layout,
  children: [{
    path: 'world',
    name: 'world',
    component: WorldCom
  },
  {
    path: 'blog',
    name: 'blog',
    component: BlogCom
  },
  {
    path: 'english',
    name: 'english',
    component: EnglishCom
  },
  {
    path: 'about',
    name: 'about',
    component: AboutCom
  },
  {
    path: 'weather',
    name: 'weather',
    component: WeatherCom
  }
    // , {
    //   path: 'writeBlog',
    //   name: 'writeBlog',
    //   component: WriteBlogCom
    // }
  ]
}];

// 创建 router 实例  
const router = createRouter({
  history: createWebHistory(),
  routes // (缩写) 相当于 routes: routes  
});

export default router;