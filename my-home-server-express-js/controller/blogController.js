'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: 日志 controller 层
 */

const service = require('../service/index.js')

module.exports = class BlogController {
    static async getBlogByPage(req, res) {
        try {
            console.log(req.query)

            return service.blogService.getBlogByPage(req, res)
        } catch (error) {}
    }
}
