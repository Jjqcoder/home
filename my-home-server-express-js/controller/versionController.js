'use strict'

/**
 * 创建时间: 2025-05-11
 * 作者: jjq
 * 描述: 版本号 controller 层
 */
const R = require('./../utils/R.js')

module.exports = class VersionController {
    // 获取版本号
    static async getVersion(req, res) {
        return res.send(R.ok(200, '获取版本号成功', require('./../package.json').version))
    }
}
