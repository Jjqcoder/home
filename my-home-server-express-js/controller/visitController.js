'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客控制层
 */

const Service = require('./../service/index.js')
const R = require('./../utils/R.js')

module.exports = class VisitController {
    static async getAllVisit(req, res) {
        try {
            return res.send(R.ok(200, '获取全部的访客信息成功', await Service.visitService.getAllVisit(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> visitController.js >>> getAllVisit >>>  获取全部的访客信息失败 >>> 【${error}】`, error))
        }
    }
    static async getVisitByLimit(req, res) {
        try {
            return res.send(R.ok(200, '获取部分访客信息成功', await Service.visitService.getVisitByLimit(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> visitController.js >>> getVisitByLimit >>>  获取部分访客信息失败 >>> 【${error}】`, error))
        }
    }
}
