'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: db-service 版本服务层
 */

module.exports = class DbServiceVersionService {
    static async getDbserviceVersion() {
        try {
            return require('../package.json').version
        } catch (error) {
            throw error
        }
    }
}
