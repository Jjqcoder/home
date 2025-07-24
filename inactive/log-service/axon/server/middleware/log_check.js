'use strict'

/**
 * 创建时间: 2025-04-17
 * 作者: jjq
 * 描述: 对请求的日志数据进行校验
 */

module.exports = async (req, next, callback) => {
    try {
        req.demo = 1
        console.log('日志校验中间件执行了');
        next()// 代码无错误 调用next()
    } catch (error) {
        callback(error, { code: 5000, data: '执行 log_check 中间件的过程中发生了错误' });// 发生错误 调用callback
    }
};