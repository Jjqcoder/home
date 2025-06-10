/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: dbService 版本路由配置
 */

const middleware = require('../../../middleware/index.js')
const controller = require('../../../controller/my-home-server-express-js/index.js')

module.exports = {
    // 获取db-service版本
    '/getDbserviceVersion': [
        middleware.securityMiddleware, // 安全前置中间件
        controller.DbServiceVersionController.getDbserviceVersion
    ],
}