/**
 * 创建时间: 2025-04-05-07
 * 描述: RabbitMQ RPC 服务器类实现
 */

const amqp = require('amqplib')
const config = require('../../config/index.js')

class RabbitMQServer {
    /**
     * 构造函数
     * @param {Object} options 配置选项
     * @param {string} options.queueName 队列名称
     * @param {Function} options.requestHandler 请求处理函数
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

        // 服务器配置
        this.options = {
            queueName: 'rpc_queue', // 默认队列名称
            requestHandler: request => `响应: ${request}`, // 默认请求处理函数
            ...options
        }

        this.connection = null
        this.channel = null
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
            await this.channel.assertQueue(this.options.queueName, {durable: true})

            console.log(`RabbitMQ 服务器初始化完成，监听队列: ${this.options.queueName}`)
        } catch (error) {
            console.error('初始化 RabbitMQ 服务器失败:', error)
            throw error
        }
    }

    /**
     * 开始处理请求
     */
    async startProcessing() {
        if (!this.channel) {
            throw new Error('Channel not initialized. Call initialize() first.')
        }

        try {
            console.log(`等待队列 ${this.options.queueName} 的请求...`)

            this.channel.consume(
                this.options.queueName,
                msg => {
                    if (msg) {
                        try {
                            // 处理请求
                            const response = this.options.requestHandler(msg.content.toString())

                            // 发送响应
                            this.channel.sendToQueue(msg.properties.replyTo, Buffer.from(response), {correlationId: msg.properties.correlationId})

                            console.log(`响应已发送: ${response}`)
                        } catch (error) {
                            console.error('处理请求时出错:', error)
                        } finally {
                            this.channel.ack(msg)
                        }
                    }
                },
                {noAck: false} // 手动确认模式
            )
        } catch (error) {
            console.error('开始处理请求失败:', error)
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

module.exports = RabbitMQServer

// 使用示例
// ;(async () => {
//     const server = new RabbitMQServer({
//         queueName: 'rpc_queue',
//         requestHandler: request => {
//             console.log(`[收到请求]: ${request}`)
//             // 这里可以添加自定义的请求处理逻辑
//             return `响应: ${request}`
//         }
//     })

//     try {
//         await server.initialize()
//         await server.startProcessing()

//         // 保持连接，直到手动停止
//         process.on('SIGINT', async () => {
//             await server.close()
//             process.exit(0)
//         })
//     } catch (error) {
//         console.error('运行服务器出错:', error)
//         await server.close()
//     }
// })()
