export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: prisma客户端
 */

const {PrismaClient} = require('../prisma/generated/prisma/index')

const prisma = new PrismaClient()

module.exports = prisma
