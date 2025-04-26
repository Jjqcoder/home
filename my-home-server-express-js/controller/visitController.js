/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客控制层
 */

const Service = require('./../service/index.js')

module.exports = class VisitController {
    static async getAllVisit(req, res) {
        return Service.visitService.getAllVisit(req, res)
    }
}
