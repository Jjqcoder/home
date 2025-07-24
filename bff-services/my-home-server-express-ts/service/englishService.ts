export { }; // 让 TypeScript 把该文件当作模块

const e = require('express')
/**
 * 创建时间: 2025-05-12
 * 作者: jjq
 * 描述: 英语学习服务层
 */

const {prisma} = require('../lib/index')

module.exports = class EnglishService {
    // 随机获取ENGLISH表中的一个句子
    static async getSentenceRandomOne(req, res) {
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
