'use strict'

/**
 * 创建时间: 2025-05-08
 * 作者: jjq
 * 描述: 项目入口
 */

const RabbitMQResponder = require('./lib/rabbitmq/index.js')
const router = require('./router/index.js')

;(async () => {
    try {
        const queueName = '/manage-server-express-js'
        const requestHandler = async requestData => {
            console.log(`[收到请求]: ${JSON.stringify(requestData)}`)
            // 这里可以添加自定义的请求处理逻辑
            const res = await router[requestData.route](requestData.data)

            return res
        }

        await RabbitMQResponder.startResponder(queueName, requestHandler)
    } catch (error) {
        console.error('运行 Responder 出错:', error)
    }
})()
