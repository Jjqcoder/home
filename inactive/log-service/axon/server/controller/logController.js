'use strict'

/**
 * 创建时间: 2025-04-19
 * 作者: jjq
 * 描述: 日志控制层
 */

const Service = require('../service/index.js')
const logger = require('../logger.js')
const code = require('../code.json')

module.exports = class LogController {
    // 新增日志
    static async addLog(obj) {
        try {
            // throw 'controller 测试错误'
            await Service.log.addLog(obj);
        } catch (error) {
            logger.error(`controller >>> LogController >>> addLog >>> obj: ${JSON.stringify(obj)} >>> error: ${JSON.stringify(error)}`)
            throw { ...code[5000], data: `error:${JSON.stringify(error)}` }// 注意 此处需要抛出错误！ 否则不会被捕获
        }

    }
}