'use strict'

/**
 * 创建时间: 2025-04-19
 * 作者: jjq
 * 描述: 日志服务层
 */

const Mongo = require('./../lib/mongo/index.js')
const logger = require('../logger.js')
const code = require('../code.json')

const mongo = new Mongo()

module.exports = class LogService {
    // 新增日志
    static async addLog(obj) {
        try {
            // console.log('待插入数据' + JSON.stringify(obj));
            // throw "service 测试错误"
            await mongo.insertData('log', obj === undefined ? {} : obj);
        } catch (error) {
            logger.error(`service >>> LogService >>> addLog >>> obj: ${JSON.stringify(obj)} >>> error: ${JSON.stringify(error)}`)
            throw { ...code[5000], data: `error:${error}` }
        }

    }
}