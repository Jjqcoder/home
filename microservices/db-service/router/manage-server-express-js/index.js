/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const controller = require('../../controller/manage-server-express-js/index.js')
const R = require('../../lib/R.js')
const routerConfig = require('./routerConfig/index.js')

// 涉及数据库的操作均在此服务完成
const router = {
    /* manage-server-express-js路由配置挂载开始 */
    ...routerConfig.blogRouterConfig,
    ...routerConfig.englishRouterConfig,
    ...routerConfig.visitRouterConfig,
    ...routerConfig.dbServiceRouterConfig,
    /* manage-server-express-js路由配置挂载结束 */
    
    /* 其他项目挂载开始 */
    // .....
    /* 其他项目挂载结束 */
}

module.exports = router
