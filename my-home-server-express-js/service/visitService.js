'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客 服务层
 */

const {prisma} = require('../lib/index.js')

module.exports = class VisitService {
    static async getAllVisit(req, res) {
        return await prisma.vISIT_RECORDER.findMany()
    }
}
