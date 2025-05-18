'use strict'

/**
 * 创建时间: 2025-05-18
 * 作者: jjq
 * 描述: 中间件类
 * 约定：业务流程中，只会向请求方响应一次，一旦响应，后续中间件或者业务代码不再执行。保证整个业务流程会有返回值。
 */

const R = require('../R.js')

module.exports = class Middleware {
    // 前置中间件
    static async securityMiddleware(req) {
        console.log('我是安全前置中间件，入参为' + JSON.stringify(req))
        if (1) {
            return R.err(400, '请求不合法', null)
        }
    }
}
