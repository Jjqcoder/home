'use strict'

const amqp = require('amqplib')
const config = require('../../config/index.js').get('rabbitmqConf')

class RabbitMQResponder {
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
            vhost: '/', // 默认虚拟主机
            heartbeat: 60 // 新增：心跳间隔（秒）
        }

        // 服务器配置
        this.options = {
            queueName: 'rpc_queue', // 默认队列名称
            requestHandler: request => `响应: ${request}`, // 默认请求处理函数
            connectionCheckInterval: 15000, // 新增：连接检查间隔（毫秒）
            ...options
        }

        this.connection = null
        this.channel = null
        this.connectionCheckTimer = null // 新增：连接检查定时器
        this.lastActivityTime = Date.now() // 新增：最后活动时间
    }

    /**
     * 初始化连接和通道
     */
    async initialize() {
        try {
            // 创建连接
            this.connection = await amqp.connect(this.getConnectionUrl())

            // 新增：监听连接错误和关闭事件
            this.connection.on('error', err => {
                console.error('RabbitMQ 连接错误:', err)
                this.scheduleReconnect()
            })
            this.connection.on('close', () => {
                console.log('RabbitMQ 连接关闭')
                this.scheduleReconnect()
            })

            // 创建通道
            this.channel = await this.connection.createChannel()

            // 声明队列
            await this.channel.assertQueue(this.options.queueName, {durable: true})

            // 新增：启动连接保活检查
            this.startConnectionKeepAlive()

            console.log(`RabbitMQ Responder 初始化完成，监听队列: ${this.options.queueName}`)
        } catch (error) {
            console.error('初始化 RabbitMQ Responder 失败:', error)
            this.scheduleReconnect()
            throw error
        }
    }

    // 新增：启动连接保活检查
    startConnectionKeepAlive() {
        if (this.connectionCheckTimer) {
            clearInterval(this.connectionCheckTimer)
        }

        this.connectionCheckTimer = setInterval(() => {
            this.checkConnection()
        }, this.options.connectionCheckInterval)
    }

    // 新增：检查连接状态
    async checkConnection() {
        try {
            console.log(`检查 RabbitMQ 连接状态...` + new Date().toLocaleString())

            // 如果连接不存在或已关闭，尝试重新连接
            if (!this.connection || this.connection.connection === null) {
                console.log('检测到连接丢失，尝试重新连接...')
                await this.reconnect()
                return
            }

            // 发送一个空操作来保持连接活跃
            if (this.channel) {
                await this.channel.checkQueue(this.options.queueName)
            }
        } catch (error) {
            console.error('连接保活检查失败:', error)
            this.scheduleReconnect()
        }
    }

    // 新增：计划重新连接
    scheduleReconnect() {
        if (this.reconnectScheduled) return

        this.reconnectScheduled = true
        setTimeout(() => {
            this.reconnectScheduled = false
            this.reconnect()
        }, 5000) // 5秒后尝试重新连接
    }

    // 新增：重新连接逻辑
    async reconnect() {
        try {
            await this.close() // 确保先关闭现有连接

            // 重新初始化
            await this.initialize()

            // 如果之前已经开始处理请求，重新开始
            if (this.processingStarted) {
                await this.startProcessing()
            }
        } catch (error) {
            console.error('重新连接失败:', error)
            this.scheduleReconnect()
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

            this.processingStarted = true // 标记已开始处理

            this.channel.consume(
                this.options.queueName,
                async msg => {
                    if (msg) {
                        try {
                            console.log(`收到请求: ${msg.content.toString()}`)
                            this.lastActivityTime = Date.now() // 更新最后活动时间

                            // 将请求数据字符串转换为对象
                            const requestData = JSON.parse(msg.content.toString()) // 将请求数据字符串转换为对象

                            // 处理请求
                            const response = await this.options.requestHandler(requestData)

                            // 将响应数据对象转换为字符串
                            const responseString = JSON.stringify(response)

                            // 发送响应
                            this.channel.sendToQueue(msg.properties.replyTo, Buffer.from(responseString), {
                                correlationId: msg.properties.correlationId
                            })

                            console.log(`响应已发送: ${responseString}`)
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
            if (this.connectionCheckTimer) {
                clearInterval(this.connectionCheckTimer)
                this.connectionCheckTimer = null
            }

            if (this.channel) {
                await this.channel.close()
                this.channel = null
            }

            if (this.connection) {
                await this.connection.close()
                this.connection = null
            }

            this.processingStarted = false // 重置处理状态
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

    /**
     * 静态方法：启动 Responder
     * @param {string} queueName 队列名称
     * @param {Function} requestHandler 请求处理函数
     */
    static async startResponder(queueName, requestHandler) {
        const responder = new RabbitMQResponder({
            queueName,
            requestHandler
        })

        try {
            await responder.initialize()
            await responder.startProcessing()

            console.log(`Responder 已启动，监听队列: ${queueName}`)

            // 保持连接，直到手动停止
            process.on('SIGINT', async () => {
                // Signal Interrupt，即"中断信号"
                // 在控制台按下 Ctrl + C 时触发
                await responder.close()
                console.log('Responder 已停止')
                process.exit(0) // 退出进程
            })
        } catch (error) {
            console.error('Responder 启动失败:', error)
            await responder.close()
        }
    }
}

module.exports = RabbitMQResponder
