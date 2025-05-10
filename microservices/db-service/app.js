'use strict'

/**
 * 创建时间: 2025-05-08
 * 作者: jjq
 * 描述: 项目入口
 */

const RabbitMQResponder = require('./lib/rabbitmq/index.js')

;(async () => {
    try {
        const queueName = 'rpc_queue'
        const requestHandler = requestData => {
            console.log(`[收到请求]: ${JSON.stringify(requestData)}`)
            // 这里可以添加自定义的请求处理逻辑
            return {response: `我是处理结果`}
        }

        await RabbitMQResponder.startResponder(queueName, requestHandler)
    } catch (error) {
        console.error('运行 Responder 出错:', error)
    }
})()
