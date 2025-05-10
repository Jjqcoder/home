'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客 服务层
 */

const {prisma} = require('../lib/index.js')

module.exports = class VisitService {
    static async getAllVisit(req, res) {
        try {
            return await prisma.vISIT_RECORDER.findMany()
        } catch (error) {}
    }

    // 获取指定数量的数据 默认为500条（前端不会发送limit数量）
    static async getVisitByLimit(req, res) {
        try {
            // const limit = req.query.limit || 500 // 默认为500条
            const limit = 500 // 默认为500条
            return await prisma.vISIT_RECORDER.findMany({
                take: limit, // 限制返回的记录数
                orderBy: {
                    ID: 'desc' // 按id降序排序
                }
            })
        } catch (error) {
            console.error('Error fetching visits:', error) // 打印错误信息
        }
    }
}
