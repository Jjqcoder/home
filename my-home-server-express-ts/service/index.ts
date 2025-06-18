'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: service 主类
 */

module.exports = class Service {
    static blogService = require('./blogService')
    static visitService = require('./visitService')
    static weatherService = require('./weatherService')
    static englishService = require('./englishService')
    static onlineCountService = require('./onlineCount/index')
    static versionService = require('./version/index')
    /* rpc调用开始 */
    static rpcBlogService = require('./rpc/blogService')
    static rpcEnglishService = require('./rpc/englishService')
    static rpcVisitService = require('./rpc/visitService')
    static rpcDbserviceVersionService = require('./rpc/dbserviceVersionService')
    /* rpc调用结束 */
}
