/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 生成 prisma 客户端
 */

// err
// import { PrismaClient } from '@prisma/client'

// success
import { PrismaClient } from '../generated/prisma/index'

const prisma = new PrismaClient()

export { prisma }

