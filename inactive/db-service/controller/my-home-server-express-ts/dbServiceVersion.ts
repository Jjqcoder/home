export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: dbService 版本控制层
 */

const R = require('../../lib/index').R
const service = require('../../service/index')

module.exports = class DbServiceVersionController {

    static async getDbserviceVersion() {
        try {
            console.log('接收到请求👻', await service.dbserviceVersionService.getDbserviceVersion());
            
            return R.ok(200, 'db-service 版本获取成功', await service.dbserviceVersionService.getDbserviceVersion())
        } catch (error) {
            return R.err(500, '获取 db-service 版本失败', error)
        }
    }

}