'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 控制层
 */

const service = require('../../service/index.js')

module.exports = class controller {
    static async add(req) {
        const result = await service.add(req)
        return result
    }
}
