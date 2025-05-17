/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: service类各项目共用，在controller层做项目的区分即可
 */

const R = require('../R.js') // 引入响应工具类

module.exports = class service {
    static blogService = require('./blogService.js') // 日志服务
    static englishService = require('./englishService.js') // 英语学习服务
    static visitService = require('./visitService.js') // 访问记录服务

    // static async add(req) {
    //     try {
    //         if (1) {
    //             throw '服务内部测试错误'
    //         }
    //         const {a, b} = req // 在函数体内解构
    //         return R.ok(200, '操作成功', a + b) // 返回结果
    //     } catch (error) {
    //         return R.err(500, '操作失败', error) // 返回错误
    //     }
    // }

    // static async subtract(req) {
    //     try {
    //         const {a, b} = req // 在函数体内解构
    //         return R.ok(200, '操作成功', a - b) // 返回结果
    //     } catch (error) {
    //         return R.err(500, '操作失败', error) // 返回错误
    //     }
    // }
}
