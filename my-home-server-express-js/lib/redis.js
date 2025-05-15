'use strict'

/**
 * 创建时间: 2025-05-15
 * 作者: jjq
 * 描述: 封装redis操作
 */

const Redis = require('ioredis')

class RedisClient {
    /**
     * 构造函数
     * @param {Object} config Redis配置
     */
    constructor(config) {
        this.client = new Redis(config)
        this._bindEvents()
    }

    /**
     * 绑定Redis事件
     */
    _bindEvents() {
        this.client.on('connect', () => {
            console.log('Redis连接成功')
        })

        this.client.on('error', err => {
            console.error('Redis错误:', err)
        })

        this.client.on('close', () => {
            console.log('Redis连接关闭')
        })

        this.client.on('reconnecting', () => {
            console.log('Redis正在重连...')
        })
    }

    /**
     * 设置键值
     * @param {string} key 键名
     * @param {string|number|Object} value 值
     * @param {number} [expire] 过期时间(秒)
     * @return {Promise<boolean>}
     */
    async set(key, value, expire) {
        try {
            if (typeof value === 'object') {
                value = JSON.stringify(value)
            }

            if (expire) {
                await this.client.setex(key, expire, value)
            } else {
                await this.client.set(key, value)
            }
            return true
        } catch (err) {
            console.error('Redis set error:', err)
            return false
        }
    }

    /**
     * 获取键值
     * @param {string} key 键名
     * @return {Promise<string|Object|null>}
     */
    async get(key) {
        try {
            const value = await this.client.get(key)
            try {
                return JSON.parse(value)
            } catch {
                return value
            }
        } catch (err) {
            console.error('Redis get error:', err)
            return null
        }
    }

    /**
     * 删除键
     * @param {string} key 键名
     * @return {Promise<boolean>}
     */
    async del(key) {
        try {
            await this.client.del(key)
            return true
        } catch (err) {
            console.error('Redis del error:', err)
            return false
        }
    }

    /**
     * 设置键的过期时间
     * @param {string} key 键名
     * @param {number} seconds 过期时间(秒)
     * @return {Promise<boolean>}
     */
    async expire(key, seconds) {
        try {
            await this.client.expire(key, seconds)
            return true
        } catch (err) {
            console.error('Redis expire error:', err)
            return false
        }
    }

    /**
     * 检查键是否存在
     * @param {string} key 键名
     * @return {Promise<boolean>}
     */
    async exists(key) {
        try {
            const result = await this.client.exists(key)
            return result === 1
        } catch (err) {
            console.error('Redis exists error:', err)
            return false
        }
    }

    /**
     * 自增操作
     * @param {string} key 键名
     * @param {number} [increment=1] 增量
     * @return {Promise<number|null>} 返回自增后的值
     */
    async incr(key, increment = 1) {
        try {
            if (increment === 1) {
                return await this.client.incr(key)
            } else {
                return await this.client.incrby(key, increment)
            }
        } catch (err) {
            console.error('Redis incr error:', err)
            return null
        }
    }

    /**
     * 自减操作
     * @param {string} key 键名
     * @param {number} [decrement=1] 减量
     * @return {Promise<number|null>} 返回自减后的值
     */
    async decr(key, decrement = 1) {
        try {
            if (decrement === 1) {
                return await this.client.decr(key)
            } else {
                return await this.client.decrby(key, decrement)
            }
        } catch (err) {
            console.error('Redis decr error:', err)
            return null
        }
    }

    /**
     * 发布消息到频道
     * @param {string} channel 频道名
     * @param {string|Object} message 消息
     * @return {Promise<number>} 收到消息的订阅者数量
     */
    async publish(channel, message) {
        try {
            if (typeof message === 'object') {
                message = JSON.stringify(message)
            }
            return await this.client.publish(channel, message)
        } catch (err) {
            console.error('Redis publish error:', err)
            return 0
        }
    }

    /**
     * 订阅频道
     * @param {string} channel 频道名
     * @param {Function} callback 消息回调
     */
    subscribe(channel, callback) {
        const subscriber = this.client.duplicate()
        subscriber.subscribe(channel, err => {
            if (err) {
                console.error('Redis subscribe error:', err)
            }
        })

        subscriber.on('message', (ch, message) => {
            if (ch === channel) {
                try {
                    const parsedMsg = JSON.parse(message)
                    callback(parsedMsg)
                } catch {
                    callback(message)
                }
            }
        })

        return subscriber
    }

    /**
     * 关闭Redis连接
     */
    async close() {
        try {
            await this.client.quit()
        } catch (err) {
            console.error('Redis close error:', err)
        }
    }
}

module.exports = RedisClient
