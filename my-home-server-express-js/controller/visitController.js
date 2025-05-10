'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客控制层
 */

const Service = require('./../service/index.js')

module.exports = class VisitController {
    static async getAllVisit(req, res) {
        try {
            return res.send(await Service.visitService.getAllVisit(req, res))
        } catch (error) {}
    }
    static async getVisitByLimit(req, res) {
        try {
            return res.send(await Service.visitService.getVisitByLimit(req, res))
        } catch (error) {}
    }
}
