'use strict'

/**
 * 创建时间: 2025-05-18
 * 作者: jjq
 * 描述: 中间件类
 * 约定：业务流程中，只会向请求方响应一次，一旦响应，后续中间件或者业务代码不再执行
 */

module.exports = class Middleware {
    // 前置中间件
    static async preCheck(ctx, next) {
        console.log('前置中间件执行了')
        next()
    }
    // 后置中间件
    static async postCheck(ctx, next) {
        console.log('后置中间件执行了')
        next()
    }

    // 中间件执行器
    static middlewareExecutor = require('./middlewareExecutor.js')
}
