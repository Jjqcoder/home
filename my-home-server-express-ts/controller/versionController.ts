export {}; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-11
 * 作者: jjq
 * 描述: 版本号 controller 层
 */
const R = require('../utils').R
const service = require('../service/index')

module.exports = class VersionController {
    // 获取版本号
    static async getVersion(req, res) {
        try {
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    default:
                        return res.send(R.err(400, '请求参数错误', `入参【${key}】不合法`))
                }
            }
            /* 字段校验结束 */
            return res.send(R.ok(200, '获取my-home-server-express-js版本号成功', service.versionService.getVersion()))
        } catch (error) {
            return res.send(R.err(500, `controller >>> versionController.js >>> getVersion >>> 获取后端版本号失败 >>> 【${error}】`, error))
        }
    }
}
