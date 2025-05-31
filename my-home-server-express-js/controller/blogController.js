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
        console.log('controller >>> blogController.js >>> getBlogByPage >>> 博客信息获取开始')

        try {
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    case 'current':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参【current】不能为空'))
                        } else if (typeof parseInt(reqObj[key]) !== 'number') {
                            return res.send(R.err(400, '请求参数错误', '入参【current】非法'))
                        }
                        break
                    case 'size':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参【size】不能为空'))
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
            return res.send(R.ok(200, '获取博客信息成功', await service.rpcBlogService.getBlogByPage(req, res))) /* 注：改为rpc调用 */
            // return await service.rpcBlogService.getBlogByPage(req, res)
        } catch (error) {
            return res.send(R.err(500, `controller >>> blgoController.js >>> getBlogByPage >>> 博客信息获取失败 >>> 【${String(error)}】`, error))
        }
    }

    static async getBlogByPageAndTag(req, res) {

        console.log('controller >>> blogController.js >>> getBlogByPageAndTag >>> 根据TAG博客信息获取开始')
        try {
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    case 'current':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参【current】不能为空'))
                        } else if (typeof parseInt(reqObj[key]) !== 'number') {
                            return res.send(R.err(400, '请求参数错误', '入参【current】非法'))
                        }
                        break
                    case 'size':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参【size】不能为空'))
                        } else if (typeof parseInt(reqObj[key]) !== 'number') {
                            return res.send(R.err(400, '请求参数错误', '入参【size】非法'))
                        }
                        break
                    case'tags':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参【tags】不能为空'))
                        } else if (typeof reqObj[key]!== 'string') {
                            return res.send(R.err(400, '请求参数错误', '入参【tags】非法'))
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
            if (!Object.prototype.hasOwnProperty.call(reqObj,'tags')) {
                return res.send(R.err(400, '请求参数错误', '入参【tags】不能为空')) 
            }
            /* 字段校验结束 */
            return res.send(R.ok(200, '根据标签博客信息成功', await service.rpcBlogService.getBlogByPageAndTag(req, res))) /* 注：改为rpc调用 */
            // return await service.rpcBlogService.getBlogByPageAndTag(req, res)
        } catch (error) {
            return res.send(R.err(500, `controller >>> blgoController.js >>> getBlogByPageAndTag >>> 根据TAG博客信息获取失败 >>> 【${String(error)}】`, error))
        }
        
    }

    static async getAllBlog(req, res) {
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
            return res.send(R.ok(200, '获取所有博客信息成功', await service.rpcBlogService.getAllBlog(req, res))) /* 注：改为rpc调用 */
        } catch (error) {
            
            return res.send(R.err(500, `controller >>> blgoController.js >>> getAllBlog >>> 获取所有博客信息失败 >>> 【${String(error)}】`, error))
        }
    }
}
