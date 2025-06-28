export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-06-08
 * 作者: jjq
 * 描述: lib 入口
 */

module.exports = class Lib {
    /* lib模块挂载开始 */
    static prisma = require('./prisma')
    static rabbitMQResponder = require('./rabbitMQResponder')
    static startQueueListen = require('./startQueueListen')
    static R = require('./R')
    /* lib模块挂载结束 */
}
