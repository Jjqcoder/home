// 导入 Vue Router
import {createRouter, createWebHashHistory} from 'vue-router'

// 定义路由
const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../components/Layout.vue'), // 布局组件
        children: [
            {
                path: 'world',
                name: 'world',
                component: () => import('../components/world/index.vue')
            },
            {
                path: 'blog',
                name: 'blog',
                component: () => import('../components/blog/index.vue')
            },
            {
                path: 'english',
                name: 'english',
                component: () => import('../components/english/index.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../components/about/index.vue')
            },
            {
                path: 'weather',
                name: 'weather',
                component: () => import('../components/weather/index.vue')
            },
            {
                path: '', // 默认子路由
                name: 'timeline',
                component: () => import('../components/timeline/index.vue')
            },
            {
                path: 'blogDetail/:row',
                name: 'blogDetail',
                component: () => import('../components/blogDetail/index.vue')
            },
            {
                path: 'visitorStatistics',
                name: 'visitorStatistics',
                component: () => import('../components/visitorStatistics/index.vue')
            },
            {
                path: 'version',
                name: 'version',
                component: () => import('../components/version/index.vue')
            },
            {
                path: 'feedback',
                name: 'feedback',
                component: () => import('../components/feedback/index.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: () => import('../components/login/index.vue')
            },
            {
                path: '/:pathMatch(.*)*', // 捕获所有路径
                name: 'error',
                component: () => import('../components/err/index.vue')
            }
        ]
    }
]

// 创建 router 实例
const router = createRouter({
    history: createWebHashHistory(),
    routes // (缩写) 相当于 routes: routes
})

export default router
