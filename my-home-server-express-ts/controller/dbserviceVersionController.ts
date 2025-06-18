export {}; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: db-service 版本控制层
 */
const R = require('../utils').R
const service = require('../service/index')

module.exports = class DbserviceVersionService {
    // 获取版本号
    static async getDbserviceVersion(req, res) {
        try {
           return res.send(R.ok(200, '获取db-service版本成功', await service.rpcDbserviceVersionService.getDbserviceVersion()))
        } catch (error) {
            return res.send(
                R.err(500, `controller >>> dbserviceVersionController.js >>> getDbserviceVersion >>> 获取db-service版本失败 >>> 【${error}】`, error)
            )
        }
    }
}
