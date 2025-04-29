'use strict'

/**
 * 创建时间: 2025-04-14
 * 作者: jjq
 * 描述: 中间件类
 */

module.exports = class Middleware {
    static logger = require('./loggerMiddleware.js')
    static recordVisitors = require('./recordVisitorsMiddleware.js')
}
