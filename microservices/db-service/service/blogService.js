'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 日志服务层
 */

const prisma = require('../lib/prisma.js')

module.exports = class blogService {
    static async getBlogByPage(req) {
        try {
            return await prisma.BLOG.findMany()
        } catch (error) {}
    }
}
