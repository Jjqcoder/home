'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: RabbitMQ 发布者类实现
 */

const amqp = require('amqplib')
const config = require('../../config/index.js')

class RabbitMQPublisher {
    /**
     * 构造函数
     * @param {Object} options 配置选项
     * @param {string} options.exchangeName 交换机名称
     * @param {string} options.exchangeType 交换机类型
     * @param {boolean} options.durable 是否持久化
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

        // 发布者配置
        this.options = {
            exchangeName: 'manage-server-express-js',
            exchangeType: 'fanout',
            durable: true,
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

            // 声明交换机
            await this.channel.assertExchange(this.options.exchangeName, this.options.exchangeType, {durable: this.options.durable})

            console.log(`RabbitMQ 发布者初始化完成，连接到交换机: ${this.options.exchangeName}`)
        } catch (error) {
            console.error('初始化 RabbitMQ 发布者失败:', error)
            throw error
        }
    }

    /**
     * 发布消息
     * @param {string} message 要发布的消息
     * @param {string} routingKey 路由键(可选)
     */
    async publish(message, routingKey = '') {
        if (!this.channel) {
            throw new Error('Channel not initialized. Call initialize() first.')
        }

        try {
            const messageBuffer = Buffer.from(message)
            this.channel.publish(
                this.options.exchangeName,
                routingKey,
                messageBuffer,
                {persistent: this.options.durable} // 如果持久化则设置消息为持久化
            )

            console.log(`消息发布成功到交换机 ${this.options.exchangeName}: ${message}`)
        } catch (error) {
            console.error('发布消息失败:', error)
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

// 使用示例
let pubDemo = async () => {
    const publisher = new RabbitMQPublisher({
        exchangeName: 'manage-server-express-js',
        exchangeType: 'fanout',
        durable: true
    })

    try {
        await publisher.initialize()
        await publisher.publish('Hello, RabbitMQ!!!')

        // 延迟一会儿确保消息发送完成
        await new Promise(resolve => setTimeout(resolve, 500))

        await publisher.close()
    } catch (error) {
        console.error('运行示例出错:', error)
    }
}
setInterval(pubDemo, 2000)
