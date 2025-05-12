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
        } catch (error) {
            throw error
        }
    }

    // 获取指定数量的数据 默认为500条（前端不会发送limit数量）
    static async getVisitByLimit(req, res) {
        try {
            // const limit = req.query.limit || 500 // 默认为500条
            const limit = 1000 // 默认为500条

            let res = await prisma.vISIT_RECORDER.findMany({
                take: limit, // 限制返回的记录数
                orderBy: {
                    ID: 'desc' // 按id降序排序
                }
            })

            return res.reverse() // 注：这里返回的数据是倒序的，所以需要反转一下
        } catch (error) {
            throw error
        }
    }
}
