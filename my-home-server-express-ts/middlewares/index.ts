export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-04-14
 * 作者: jjq
 * 描述: 中间件类
 */

module.exports = class Middleware {
    static logger = require('./loggerMiddleware')
    static recordVisitors = require('./recordVisitorsMiddleware')
}
