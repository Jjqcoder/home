export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const service = require('../../service/project1/index')

const router = {
    '/add': service.add,
    '/subtract': service.subtract
    // 可以继续添加更多方法
}

module.exports = router
