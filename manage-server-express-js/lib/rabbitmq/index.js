/**
 * 创建时间: 2025-05-07
 * 作者: jjq
 * 描述: RabbitMQ RPC 请求者类实现
 */

const amqp = require('amqplib')
const config = require('../../config/index.js')

class RabbitMQRequester {
    /**
     * 构造函数
     * @param {Object} options 配置选项
     * @param {string} options.queueName 队列名称
     */
    constructor(options = {}) {
        // RabbitMQ 连接配置
        this.connectionConfig = {
            protocol: 'amqp',
            hostname: config.ip,
            port: config.rabbitmq_port,
            username: config.rabbitmq_user,
            password: config.rabbitmq_password,
            vhost: '/' // 默认虚拟主机
        }

        // 请求者配置
        this.options = {
            queueName: 'rpc_queue', // 默认队列名称
            ...options
        }

        this.connection = null
        this.channel = null
        this.responseQueue = null
        this.correlationId = null
    }

    /**
     * 初始化连接和通道
     */
    async initialize() {
        try {
            // 创建连接
            this.connection = await amqp.connect(this.getConnectionUrl())

            // 创建通道
            this.channel = await this.connection.createChannel()

            // 声明队列
            this.responseQueue = await this.channel.assertQueue('', {exclusive: true})

            console.log(`RabbitMQ 请求者初始化完成，监听响应队列: ${this.responseQueue.queue}`)
        } catch (error) {
            console.error('初始化 RabbitMQ 请求者失败:', error)
            throw error
        }
    }

    /**
     * 发送请求并等待响应
     * @param {string} message 请求消息
     * @returns {Promise<string>} 服务器的响应
     */
    async sendRequest(message) {
        if (!this.channel) {
            throw new Error('Channel not initialized. Call initialize() first.')
        }

        try {
            // 生成唯一的 correlationId
            this.correlationId = Math.random().toString()

            // 发送请求
            this.channel.sendToQueue(this.options.queueName, Buffer.from(message), {
                correlationId: this.correlationId,
                replyTo: this.responseQueue.queue
            })

            console.log(`请求已发送到队列 ${this.options.queueName}: ${message}`)

            // 等待响应
            return new Promise((resolve, reject) => {
                this.channel.consume(
                    this.responseQueue.queue,
                    msg => {
                        if (msg.properties.correlationId === this.correlationId) {
                            resolve(msg.content.toString())
                            this.channel.cancel(this.responseQueue.queue)
                        }
                    },
                    {noAck: true}
                )
            })
        } catch (error) {
            console.error('发送请求失败:', error)
            throw error
        }
    }

    /**
     * 关闭连接
     */
    async close() {
        try {
            if (this.channel) {
                await this.channel.close()
                this.channel = null
            }

            if (this.connection) {
                await this.connection.close()
                this.connection = null
            }

            console.log('RabbitMQ 连接已关闭')
        } catch (error) {
            console.error('关闭连接时出错:', error)
        }
    }

    /**
     * 获取连接URL
     * @returns {string} 连接URL
     */
    getConnectionUrl() {
        const {protocol, hostname, port, username, password, vhost} = this.connectionConfig
        return `${protocol}://${username}:${password}@${hostname}:${port}${vhost}`
    }
}

module.exports = RabbitMQRequester

// 使用示例
// setInterval(async () => {
//     const requester = new RabbitMQRequester({
//         queueName: 'rpc_queue'
//     })

//     try {
//         await requester.initialize()

//         const response = await requester.sendRequest('Hello, RabbitMQ RPC!')
//         console.log(`收到响应: ${response}`)

//         // await requester.close()
//     } catch (error) {
//         console.error('运行请求者出错:', error)
//         await requester.close()
//     }
// }, 1000)
