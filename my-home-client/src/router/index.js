// 导入 Vue Router  
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 导入需要路由的组件  
// import HelloWorld from './../components/HelloWorld.vue' // 欢迎组件
import Layout from './../components/Layout.vue'; // 布局组件
import WorldCom from './../components/world/index.vue';
import BlogCom from './../components/blog/index.vue';
import EnglishCom from './../components/english/index.vue';
import AboutCom from './../components/about/index.vue';
import WeatherCom from './../components/weather/index.vue';
import TimelineCom from './../components/timeline/index.vue';
import menuCom from './../components/menu/index.vue';
import ArticleView from '../views/ArticleView.vue';

// 定义路由  
const routes = [{
  path: '/',
  redirect: '/timeline', // 默认重定向到counter组件处
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
  }, {
    path: '', // 默认子路由
    name: 'timeline',
    component: TimelineCom
  }, {
    path: 'articleView',
    name: 'articleView',
    component: ArticleView
  }
  ]
}];

// 创建 router 实例  
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes // (缩写) 相当于 routes: routes
});

export default router;