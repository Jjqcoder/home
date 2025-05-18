'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 工具类
 */

const RabbitMQResponder = require('../lib/rabbitmq/index.js')

module.exports = class Utils {
    /* 
        功能：用于响应请求的方法
        约定：此方法会逐个执行中间件，直到有一个中间件返回数据为止（后续的中间件不会再执行）。中间件数组中必定会有一个返回数据的中间件。
    */
    static async startQueueResponder(queueName, router) {
        try {
            const requestHandler = async requestData => {
                const middlewaresLength = router[requestData.route].length
                for (let i = 0; i < middlewaresLength; i++) {
                    let result = await router[requestData.route][i](requestData.data)
                    if (result !== undefined) {
                        return result
                    }
                }
            }

            // 响应请求
            await RabbitMQResponder.startResponder(queueName, requestHandler)
        } catch (error) {
            console.error('运行 Responder 出错:', error)
        }
    }
}
