/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const controller = require('../../controller/manage-server-express-js/index.js')
const R = require('../../R.js')

// 涉及数据库的操作均在此服务完成
const router = {
    /* 分页获取日志 */
    '/getBlogByPage': [
        require('../../middleware/index.js').securityMiddleware, // 安全前置中间件
        controller.getBlogByPage
    ],
    /* 分页且根据TAG获取日志 */
    '/getBlogByPageAndTag': [
        require('../../middleware/index.js').securityMiddleware, // 安全前置中间件
        controller.getBlogByPageAndTag
    ],
    // 获取全部日志
    '/getAllBlog': [
        require('../../middleware/index.js').securityMiddleware, // 安全前置中间件
        controller.getAllBlog
    ],
    // 获取全部的日志标签
    '/getAllTag': [
        require('../../middleware/index.js').securityMiddleware, // 安全前置中间件
        controller.getAllTag
    ],
    // 随机获取一个英语句子
    '/getSentenceRandomOne': [
        require('../../middleware/index.js').securityMiddleware, // 安全前置中间件
        controller.getSentenceRandomOne
    ],
    // 获取所有访问记录
    '/getAllVisit': [
        require('../../middleware/index.js').securityMiddleware, // 安全前置中间件
        controller.getAllVisit
    ],
    // 获取近期访问记录
    '/getVisitByLimit': [
        require('../../middleware/index.js').securityMiddleware, // 安全前置中间件
        controller.getVisitByLimit
    ]
    // 可以继续添加更多方法
}

module.exports = router
