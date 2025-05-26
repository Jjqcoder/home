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
        console.log('👻', req)

        if (req.dbServiceKey !== require('../config/index.js').dbServiceKey) {
            // 如果请求的秘钥不合法，直接返回错误
            return R.err(401, '您的请求不合法，请检查DB_SERVICE_KEY的配置', null)
        }
        // if (1) {
        //     return R.err(400, '请求不合法', null)
        // }
    }
}
