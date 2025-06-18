// 导入 Vue Router
import { createRouter, createWebHashHistory } from 'vue-router'

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
                component: () => import('../components/World/index.vue')
            },
            {
                path: 'blog',
                name: 'blog',
                component: () => import('../components/Blog/index.vue')
            },
            {
                path: 'english',
                name: 'english',
                component: () => import('../components/English/index.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../components/About/index.vue')
            },
            {
                path: 'weather',
                name: 'weather',
                component: () => import('../components/Weather/index.vue')
            },
            {
                path: '', // 默认子路由
                name: 'timeline',
                component: () => import('../components/Timeline/index.vue')
            },
            {
                path: 'blogDetail/:row',
                name: 'blogDetail',
                component: () => import('../components/BlogDetail/index.vue')
            },
            {
                path: 'visitorStatistics',
                name: 'visitorStatistics',
                component: () => import('../components/VisitorStatistics/index.vue')
            },
            {
                path: 'version',
                name: 'version',
                component: () => import('../components/Version/index.vue')
            },
            {
                path: 'feedback',
                name: 'feedback',
                component: () => import('../components/Feedback/index.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: () => import('../components/Login/index.vue')
            },
            {
                path: '/game',
                name: 'game',
                component: () => import('../components/Game/index.vue')
            },
            {
                path: '/aboutWebsite',
                name: 'aboutWebsite',
                component: () => import('../components/AboutWebsite/index.vue')
            },
            {
                path: '/:pathMatch(.*)*', // 捕获所有路径
                name: 'error',
                component: () => import('../components/Err/index.vue')
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
