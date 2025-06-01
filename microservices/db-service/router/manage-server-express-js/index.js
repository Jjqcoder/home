/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const controller = require('../../controller/manage-server-express-js/index.js')
const R = require('../../R.js')
const routerConfig = require('./routerConfig/index.js')

// 涉及数据库的操作均在此服务完成
const router = {
    /* 路由配置挂载开始 */
    ...routerConfig.blogRouterConfig,
    ...routerConfig.englishRouterConfig,
    ...routerConfig.visitRouterConfig,
    /* 路由配置挂载结束 */
}

module.exports = router
