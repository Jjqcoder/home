/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: service 即 routerHandler
 */

const R = require('../../R.js') // 引入 R.js

module.exports = class service {
    static async add(req) {
        try {
            if (1) {
                throw '服务内部测试错误'
            }
            const {a, b} = req // 在函数体内解构
            return R.ok(200, '操作成功', a + b) // 返回结果
        } catch (error) {
            return R.err(500, '操作失败', error) // 返回错误
        }
    }

    static async subtract(req) {
        try {
            const {a, b} = req // 在函数体内解构
            return R.ok(200, '操作成功', a - b) // 返回结果
        } catch (error) {
            return R.err(500, '操作失败', error) // 返回错误
        }
    }
}
