'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: prisma客户端
 */

const {PrismaClient} = require('./generated/prisma/index.js')

const prisma = new PrismaClient()

module.exports = prisma
