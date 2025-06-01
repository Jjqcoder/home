/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: 英语路由配置
 */

const middleware = require('../../../middleware/index.js')
const controller = require('../../../controller/manage-server-express-js/index.js')

module.exports = {
    // 随机获取一个英语句子
    '/getSentenceRandomOne': [
        middleware.securityMiddleware, // 安全前置中间件
        controller.getSentenceRandomOne
    ],
}