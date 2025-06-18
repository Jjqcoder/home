'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: 生成prisma客户端
 */

const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = prisma
