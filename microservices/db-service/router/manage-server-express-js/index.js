/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const controller = require('../../controller/manage-server-express-js/index.js')

const router = {
    '/add': controller.add
    // 可以继续添加更多方法
}

module.exports = router
