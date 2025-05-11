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
        try {
            // console.log('我被调用了' + require('../package.json').version)

            return res.send(R.ok(200, '获取后端版本号成功', require('../service/version/versionService.js')))
        } catch (error) {
            return res.send(R.err(500, `controller >>> versionController.js >>> getVersion >>> 获取后端版本号失败 >>> 【${error}】`, error))
        }
    }
}
