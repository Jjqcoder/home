'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: 日志 controller 层
 */

const service = require('../service/index.js')
const R = require('../utils/R.js')

module.exports = class BlogController {
    static async getBlogByPage(req, res) {
        try {
            // if (1) {
            //     throw '测试错误'
            // }
            return res.send(R.ok(200, '博客信息获取成功', await service.blogService.getBlogByPage(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> blgoController.js >>> getBlogByPage >>> 博客信息获取失败 >>> 【${error}】`, error))
        }
    }
}
