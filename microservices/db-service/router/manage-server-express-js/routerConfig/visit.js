/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: 访客路由配置
 */

const middleware = require('../../../middleware/index.js')
const controller = require('../../../controller/manage-server-express-js/index.js')

module.exports = {
    // 获取所有访问记录
    '/getAllVisit': [
        middleware.securityMiddleware, // 安全前置中间件
        controller.getAllVisit
    ],
    // 获取近期访问记录
    '/getVisitByLimit': [
        middleware.securityMiddleware, // 安全前置中间件
        controller.getVisitByLimit
    ]
}