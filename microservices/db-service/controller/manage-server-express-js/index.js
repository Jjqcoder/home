'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 控制层
 */

const service = require('../../service/index.js')
const R = require('../../R.js')

module.exports = class controller {
    static async getBlogByPage(req) {
        try {
            return R.ok(200, '获取日志成功', await service.blogService.getBlogByPage(req))
        } catch (error) {
            return R.err(500, '获取日志失败', error)
        }
    }
    static async getSentenceRandomOne(req) {
        try {
            console.log('获取随机句子')

            return R.ok(200, '获取句子成功', await service.englishService.getSentenceRandomOne(req))
        } catch (error) {
            return R.err(500, '获取句子失败', error)
        }
    }
    static async getAllVisit(req) {
        try {
            return R.ok(200, '获取访问记录成功', await service.visitService.getAllVisit(req))
        } catch (error) {
            return R.err(500, '获取访问记录失败', error)
        }
    }
    static async getVisitByLimit(req) {
        try {
            return R.ok(200, '获取近期访问记录成功', await service.visitService.getVisitByLimit(req))
        } catch (error) {
            return R.err(500, '获取近期访问记录失败', error)
        }
    }
}
