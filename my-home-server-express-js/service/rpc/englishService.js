'use strict'

/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 英语学习服务层(rpc)
 */

const RabbitMQRequester = require('../../rpc/rabbitmq/index.js')
const DB_SERVICE_KEY = require('../../config/index.js').get('DB_SERVICE_KEY')

module.exports = class EnglishService {
    // 随机获取ENGLISH表中的一个句子
    static async getSentenceRandomOne(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {
                route: '/getSentenceRandomOne',
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
