/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const router = {
    '/add': async req => {
        const {a, b} = req
        return a + b
    },
    '/subtract': async req => {
        const {a, b} = req
        return  a - b
    }
    // 可以继续添加更多方法
}

module.exports = router
