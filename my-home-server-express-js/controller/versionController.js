'use strict'

module.exports = class VersionController {
    // 获取版本号
    static async getVersion(req, res) {
        return res.send(require('./../package.json').version)
    }
}
