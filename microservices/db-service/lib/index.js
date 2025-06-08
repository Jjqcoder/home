/**
 * 创建时间: 2025-06-08
 * 作者: jjq
 * 描述: lib 入口
 */

module.exports = class Lib {
    /* lib模块挂载开始 */
    static prisma = require('./prisma.js')
    static rabbitMQResponder = require('./rabbitMQResponder.js')
    static startQueueListen = require('./startQueueListen.js')
    static R = require('./R.js')
    /* lib模块挂载结束 */
}
