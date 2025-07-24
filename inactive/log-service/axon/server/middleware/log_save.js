'use strict'

/**
 * 创建时间: 2025-04-17
 * 作者: jjq
 * 描述: 将日志数据存储到数据库中
 */

module.exports = async (req, next, callback) => {
    try {
        req.demo2 = 2
        console.log('日志存储中间件执行了');
        next()// 代码无错误 调用next()
    } catch (error) {
        callback(error, { code: 5000, data: '执行 log_save 中间件的过程中发生了错误' });// 发生错误 调用callback
    }
};