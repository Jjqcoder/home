'use strict'

/**
 * 创建时间: 2025-05-08
 * 作者: jjq
 * 描述: 用于响应请求
 */

const RabbitMQServer = require('./index.js')

class Responder {
    /**
     * 构造函数
     * @param {string} queueName 队列名称
     * @param {Function} requestHandler 请求处理函数
     */
    constructor(queueName, requestHandler) {
        this.rabbitMQServer = new RabbitMQServer({
            queueName,
            requestHandler
        })
    }

    /**
     * 初始化并开始处理请求
     */
    async start() {
        try {
            await this.rabbitMQServer.initialize()
            await this.rabbitMQServer.startProcessing()

            console.log(`Responder 已启动，监听队列: ${this.rabbitMQServer.options.queueName}`)

            // 保持连接，直到手动停止
            process.on('SIGINT', async () => {
                await this.rabbitMQServer.close()
                process.exit(0) // 退出进程
            })
        } catch (error) {
            console.error('Responder 启动失败:', error)
            await this.rabbitMQServer.close()
        }
    }

    /**
     * 关闭连接
     */
    async close() {
        await this.rabbitMQServer.close()
    }
}

module.exports = Responder
