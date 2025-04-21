'use strict'

/**
 * 创建时间: 2025-04-19
 * 作者: jjq
 * 描述: 路由选择中间件
 */

module.exports = async (req, next, callback) => {
    try {
        console.log('路由选择中间件执行了');
        next()// 代码无错误 调用next()
    } catch (error) {
        callback(error, { code: 5000, data: '执行 route_select 中间件的过程中发生了错误' });// 发生错误 调用callback
    }

}