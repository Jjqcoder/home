'use strict'

/**
 * 创建时间: 2025-04-17
 * 作者: jjq
 * 描述: 中间件主类
 */

module.exports = class Middleware {

    static executeMiddlewares = require('./middleware_executor.js')// 中间件执行器
    static req_check = require('./req_check.js')// 请求校验
    static route_check = require('./route_check.js')// 路由校验
    static route_select = require('./route_select')// 路由选择
    static log_check = require('./log_check.js') // 日志校验
    static log_save = require('./log_save.js') // 日志存储

}