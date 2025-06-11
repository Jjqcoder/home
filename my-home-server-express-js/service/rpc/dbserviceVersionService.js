'use strict'

/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: dbservice 版本服务层
 */

const RabbitMQRequester = require('../../rpc/rabbitmq/index.js')
const DB_SERVICE_KEY = require('../../config/index.js').get('DB_SERVICE_KEY')
const DB_SERVICE_QUEUE_NAME = require('../../config/index.js').get('DB_SERVICE_QUEUE_NAME')

module.exports = class DbserviceVersionService {
    // 获取db-service版本
    static async getDbserviceVersion(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {
                route: '/getDbserviceVersion',
                data: {...req?.query, dbServiceKey: DB_SERVICE_KEY}
            })
            res = JSON.parse(res)
            if (res.code === 200) {
                return res.data
            } else {
                throw JSON.stringify(res)
            }
        } catch (error) {
            throw error
        }
    }
}
