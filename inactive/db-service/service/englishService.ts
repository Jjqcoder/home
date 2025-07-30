export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 英语学习服务层
 */

const prisma = require('../lib/index').prisma
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
