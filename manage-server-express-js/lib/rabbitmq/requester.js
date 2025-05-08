'use strict'

/**
 * 创建时间: 2025-05-08
 * 作者: jjq
 * 描述: 后续使用此类进行请求
 */

const RabbitMQRequester = require('./index.js')

class Requester {
    static async sendRequest(queueName, requestData) {
        const requester = new RabbitMQRequester({
            queueName: queueName
        })

        try {
            await requester.initialize()

            const response = await requester.sendRequest(requestData)
            // console.log(`收到响应: ${response}`)

            return response
        } catch (error) {
            console.error('运行请求者出错:', error)
            throw error
        } finally {
            // 延迟关闭通道，确保响应已经返回
            setTimeout(async () => {
                await requester.close()
            }, 1000) // 延迟1秒关闭通道
        }
    }
}

module.exports = Requester
