/**
 * 创建时间: 2025-05-15
 * 作者: jjq
 * 描述: 在线人数service
 */

module.exports = class OnlineCountService {
    /* 基于ws实现 */
    static ws = require('./ws')
    /* 基于ws+redis实现，解决多进程环境下在线人数不一致的问题 */
    static get wsAndRedis() {
        // 懒加载以避免运行环境未准备就绪问题
        return require('./wsAndRedis')
    }
}
