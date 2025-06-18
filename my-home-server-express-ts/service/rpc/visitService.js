'use strict'

/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 访客 服务层(rpc)
 */

const RabbitMQRequester = require('../../rpc/rabbitmq/index.js')
const DB_SERVICE_KEY = require('../../config/index.js').get('DB_SERVICE_KEY')
const DB_SERVICE_QUEUE_NAME = require('../../config/index.js').get('DB_SERVICE_QUEUE_NAME')

module.exports = class VisitService {
    static async getAllVisit(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {route: '/getAllVisit', data: {...req?.query, dbServiceKey: DB_SERVICE_KEY}})
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

    // 获取指定数量的数据 默认为500条（前端不会发送limit数量）
    static async getVisitByLimit(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {
                route: '/getVisitByLimit',
                data: {...req.query, dbServiceKey: DB_SERVICE_KEY}
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
