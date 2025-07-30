export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: 博客路由配置
 */

const middleware = require('../../../middleware/index')
const blogController = require('../../../controller/my-home-server-express-ts/index').blogController

module.exports = {
    /* 分页获取日志 */
    '/getBlogByPage': [
        middleware.securityMiddleware, // 安全前置中间件
        blogController.getBlogByPage
    ],
    /* 分页且根据TAG获取日志 */
    '/getBlogByPageAndTag': [
        middleware.securityMiddleware, // 安全前置中间件
        blogController.getBlogByPageAndTag
    ],
    // 获取全部日志
    '/getAllBlog': [
        middleware.securityMiddleware, // 安全前置中间件
        blogController.getAllBlog
    ],
    // 获取全部的日志标签
    '/getAllTag': [
        middleware.securityMiddleware, // 安全前置中间件
        blogController.getAllTag
    ],
}