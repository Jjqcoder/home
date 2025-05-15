'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: lib 主类
 */

module.exports = class Lib {
    /* 生成prisma客户端 */
    static prisma = require('./prisma.js')
    /**
     * Redis 操作封装（当前主要用于在线人数统计）
     *
     * 说明：
     * - 使用 Getter 延迟加载模式，避免 Redis 立即初始化时可能出现的：
     *   1. 循环依赖问题
     *   2. 运行环境未准备就绪问题
     *
     * 对比：
     * - Prisma 采用同步加载是安全的，因为：
     *   1. 客户端生成是无状态的静态构建
     *   2. 不依赖外部服务连接（不同于 Redis 需要即时连接服务器）
     *   3. 没有异步初始化过程
     */
    static get redis() {
        return require('./redis.js')
    }
}
