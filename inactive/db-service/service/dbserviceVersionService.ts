export { }; // 让 TypeScript 把该文件当作模块

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
