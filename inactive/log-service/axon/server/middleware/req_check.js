'use strict'

/**
 * 创建时间: 2025-04-20
 * 作者: jjq
 * 描述: 请求合法性校验中间件
 */

module.exports = async (req, next, callback) => {
    try {
        console.log('执行 req_check 中间件');
        next()
        // throw "您的请求不合法"
    } catch (error) {
        callback(error, { code: 5000, data: '执行 req_check 中间件的过程中发生了错误' });// 发生错误 调用callback 
    }
}