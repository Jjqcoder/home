'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 英语学习服务层
 */

module.exports = class englishService {
    static async getSentenceRandomOne(req) {
        try {
            const result = await prisma.$queryRaw`
            SELECT * FROM ENGLISH
            ORDER BY RAND()
            LIMIT 1
          `
            return result[0]
        } catch (error) {
            throw error
        }
    }
}
