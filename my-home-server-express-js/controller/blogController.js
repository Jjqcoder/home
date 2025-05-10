'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: 日志 controller 层
 */

const service = require('../service/index.js')
const R = require('./../utils/R.js')

module.exports = class BlogController {
    static async getBlogByPage(req, res) {
        try {
            return res.send(R.ok(200, '获取成功', await service.blogService.getBlogByPage(req, res)))
        } catch (error) {
            console.log(error)
        }
    }
}
