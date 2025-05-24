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
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    case 'current':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参 【current】 不能为空'))
                        } else if (typeof parseInt(reqObj[key]) !== 'number') {
                            return res.send(R.err(400, '请求参数错误', '入参【current】非法'))
                        }
                        break
                    case 'size':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参 【size】 不能为空'))
                        } else if (typeof parseInt(reqObj[key]) !== 'number') {
                            return res.send(R.err(400, '请求参数错误', '入参【size】非法'))
                        }
                        break
                    default:
                        return res.send(R.err(400, '请求参数错误', `入参【${key}】 不合法`))
                }
            }
            if (!Object.prototype.hasOwnProperty.call(reqObj, 'current')) {
                return res.send(R.err(400, '请求参数错误', '入参【current】不能为空'))
            }
            if (!Object.prototype.hasOwnProperty.call(reqObj, 'size')) {
                return res.send(R.err(400, '请求参数错误', '入参【size】不能为空'))
            }
            /* 字段校验结束 */
            return res.send(R.ok(200, '博客信息获取成功', await service.blogService.getBlogByPage(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> blgoController.js >>> getBlogByPage >>> 博客信息获取失败 >>> 【${error}】`, error))
        }
    }
}
