'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 英语学习服务层
 */

const prisma = require('../lib/prisma.js')
module.exports = class englishService {
    static async getSentenceRandomOne(req) {
        try {
            console.log('获取随机句子❗')
            console.log(
                '结果' +
                    (await prisma.$queryRaw`
                SELECT * FROM ENGLISH
                ORDER BY RAND()
                LIMIT 1
              `)
            )

            const result = await prisma.$queryRaw`
            SELECT * FROM ENGLISH
            ORDER BY RAND()
            LIMIT 1
          `
            console.log('🩵', result)

            return result[0]
        } catch (error) {
            console.log('获取随机句子失败:', error)

            throw error
        }
    }
}
