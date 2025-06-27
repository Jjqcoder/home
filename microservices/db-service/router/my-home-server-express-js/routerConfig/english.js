/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: 英语路由配置
 */

const middleware = require('../../../middleware/index')
const englishController = require('../../../controller/my-home-server-express-ts/index').englishController

module.exports = {
    // 随机获取一个英语句子
    '/getSentenceRandomOne': [
        middleware.securityMiddleware, // 安全前置中间件
        englishController.getSentenceRandomOne
    ],
}