'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: RabbitMQ 订阅者类实现
 */

const amqp = require('amqplib')
const config = require('../../config/index.js')

class RabbitMQConsumer {
    /**
     * 构造函数
     * @param {Object} options 配置选项
     * @param {string} options.exchangeName 交换机名称
     * @param {string} options.exchangeType 交换机类型
     * @param {boolean} options.durable 是否持久化
     * @param {boolean} options.exclusive 是否排他队列
     * @param {Function} options.messageHandler 消息处理函数
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

        // 消费者配置
        this.options = {
            exchangeName: 'manage-server-express-js',
            exchangeType: 'fanout',
            durable: true, // 即使RabbitMQ重启，队列也不会丢失
            exclusive: true, // 默认使用排他队列
            messageHandler: message => console.log(`接收到消息: ${message}`),
            ...options
        }

        this.connection = null
        this.channel = null
        this.queue = null
    }

    /**
     * 初始化连接和通道
     */
    async initialize() {
        try {
            // 创建连接和通道
            this.connection = await amqp.connect(this.getConnectionUrl())
            this.channel = await this.connection.createChannel()

            // 声明交换机
            await this.channel.assertExchange(this.options.exchangeName, this.options.exchangeType, {durable: this.options.durable})

            // 将队列名称固定为 shared-queue，并且设置 exclusive: false，这意味着多个订阅者实例可以共享同一个队列。
            // 当消息到达共享队列时，RabbitMQ 会根据消费者之间的负载均衡机制，将消息分发给其中一个消费者实例。因此，一条消息只会被一个消费者实例处理一次。
            this.queue = await this.channel.assertQueue('shared-queue', {
                durable: this.options.durable,
                exclusive: false // 不是独占队列
            })

            // 绑定队列到交换机
            await this.channel.bindQueue(this.queue.queue, this.options.exchangeName, '')

            console.log(`RabbitMQ 订阅者初始化完成，监听交换机: ${this.options.exchangeName}`)
        } catch (error) {
            console.error('初始化 RabbitMQ 订阅者失败:', error)
            throw error
        }
    }

    /**
     * 开始消费消息
     */
    async startConsuming() {
        if (!this.channel) {
            throw new Error('Channel not initialized. Call initialize() first.')
        }

        try {
            console.log(`等待 ${this.options.exchangeName} 交换机的消息...`)

            this.channel.consume(
                this.queue.queue,
                msg => {
                    if (msg) {
                        try {
                            // 调用用户定义的消息处理器
                            this.options.messageHandler(msg.content.toString())
                            this.channel.ack(msg) // 确认消息处理完成
                        } catch (error) {
                            console.error('处理消息时出错:', error)
                            this.channel.nack(msg) // 处理失败，否定确认
                        }
                    }
                },
                {noAck: false} // 手动确认模式
            )
        } catch (error) {
            console.error('开始消费消息失败:', error)
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

            this.queue = null
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

// 使用示例
;(async () => {
    const consumer = new RabbitMQConsumer({
        exchangeName: 'manage-server-express-js',
        exchangeType: 'fanout',
        durable: true,
        exclusive: true,
        messageHandler: message => {
            console.log(`[处理消息]: ${message}`)
            // 这里可以添加自定义的消息处理逻辑
        }
    })

    try {
        await consumer.initialize()
        await consumer.startConsuming()

        // 保持连接，直到手动停止
        // 在实际应用中，这里可能是长期运行的进程
        process.on('SIGINT', async () => {
            await consumer.close()
            process.exit(0)
        })
    } catch (error) {
        console.error('运行消费者出错:', error)
        await consumer.close()
    }
})()
