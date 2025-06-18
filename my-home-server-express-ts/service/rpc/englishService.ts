export {}; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 英语学习服务层(rpc)
 */

const RabbitMQRequester = require('../../rpc/rabbitmq/index')
const DB_SERVICE_KEY = require('../../config/index').get('DB_SERVICE_KEY')
const DB_SERVICE_QUEUE_NAME = require('../../config/index').get('DB_SERVICE_QUEUE_NAME')

module.exports = class EnglishService {
    // 随机获取ENGLISH表中的一个句子
    static async getSentenceRandomOne(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {
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
