/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: 访客路由配置
 */

const middleware = require('../../../middleware/index.js')
const visitController = require('../../../controller/my-home-server-express-js/index.js').visitController

module.exports = {
    // 获取所有访问记录
    '/getAllVisit': [
        middleware.securityMiddleware, // 安全前置中间件
        visitController.getAllVisit
    ],
    // 获取近期访问记录
    '/getVisitByLimit': [
        middleware.securityMiddleware, // 安全前置中间件
        visitController.getVisitByLimit
    ]
}