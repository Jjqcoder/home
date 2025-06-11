'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客控制层
 */

const Service = require('../service/index.js')
const R = require('../utils/R.js')

module.exports = class VisitController {
    static async getAllVisit(req, res) {
        try {
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    default:
                        return res.send(R.err(400, '请求参数错误', `入参【${key}】不合法`))
                }
            }
            /* 字段校验结束 */
            // return res.send(R.ok(200, '获取全部的访客信息成功', await Service.visitService.getAllVisit(req, res)))
            return res.send(R.ok(200, '获取全部的访客信息成功', await Service.rpcVisitService.getAllVisit(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> visitController.js >>> getAllVisit >>>  获取全部的访客信息失败 >>> 【${error}】`, error))
        }
    }
    static async getVisitByLimit(req, res) {
        try {
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    // 注：目前limit字段无需前端传递 后端默认为500
                    default:
                        return res.send(R.err(400, '请求参数错误', `入参【${key}】不合法`))
                }
            }
            /* 字段校验结束 */
            return res.send(R.ok(200, '获近期访客信息成功', await Service.rpcVisitService.getVisitByLimit(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> visitController.js >>> getVisitByLimit >>>  获取近期访客信息失败 >>> 【${error}】`, error))
        }
    }
}
