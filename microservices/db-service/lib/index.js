/**
 * 创建时间: 2025-06-08
 * 作者: jjq
 * 描述: lib 入口
 */

module.exports = class Lib {
    static prisma = require('./prisma.js')
    static rabbitMQResponder = require('./rabbitMQResponder.js')
}
