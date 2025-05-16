'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 工具类
 */

const RabbitMQResponder = require('../lib/rabbitmq/index.js')

module.exports = class Utils {
    /* 用于响应请求 */
    static async startQueueResponder(queueName, router) {
        try {
            const requestHandler = async requestData => {
                // 这里可以添加自定义的请求处理逻辑
                const res = await router[requestData.route](requestData.data)
                return res
            }

            await RabbitMQResponder.startResponder(queueName, requestHandler)
        } catch (error) {
            console.error('运行 Responder 出错:', error)
        }
    }
}
