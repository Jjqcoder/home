/**
 * 创建时间: 2025-05-15
 * 作者: jjq
 * 描述: 封装redis操作(引入指数退让策略)
 */

import Redis from 'ioredis';

interface RedisConfig {
    host?: string;
    port?: number;
    password?: string;
    db?: number;
    // 可以根据需要添加更多配置项
}

class RedisClient {
    private client: Redis;

    /**
     * 构造函数
     * @param {RedisConfig} config Redis配置
     */
    constructor(config: RedisConfig) {
        this.client = new Redis(config);
        this._bindEvents();
    }

    /**
     * 绑定Redis事件
     */
    private _bindEvents(): void {
        this.client.on('connect', () => {
            console.log('Redis连接成功');
        });

        this.client.on('error', (err: Error) => {
            console.error('Redis错误:', err);
        });

        this.client.on('close', () => {
            console.log('Redis连接关闭');
        });

        this.client.on('reconnecting', () => {
            console.log('Redis正在重连...');
        });
    }

    /**
     * 指数退让策略重试
     * @param {Function} fn 要执行的函数
     * @param {number} maxRetries 最大重试次数
     * @param {number} baseDelay 基础延迟时间（毫秒）
     * @returns {Promise<any>}
     */
    private async _retryWithExponentialBackoff<T>(
        fn: () => Promise<T>,
        maxRetries: number = 3,
        baseDelay: number = 1000
    ): Promise<T> {
        let retries = 0;
        while (retries < maxRetries) {
            try {
                return await fn();
            } catch (err) {
                console.warn(`尝试第 ${retries + 1} 次失败，将在 ${Math.pow(2, retries) * baseDelay}ms 后重试`);
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, retries) * baseDelay));
                retries++;
            }
        }
        throw new Error('重试次数已达上限');
    }

    /**
     * 设置键值
     * @param {string} key 键名
     * @param {string|number|Object} value 值
     * @param {number} [expire] 过期时间(秒)
     * @return {Promise<boolean>}
     */
    async set(key: string, value: string | number | object, expire?: number): Promise<boolean> {
        try {
            let valueToStore: string;
            if (typeof value === 'object') {
                valueToStore = JSON.stringify(value);
            } else {
                valueToStore = value.toString();
            }

            const fn = async (): Promise<void> => {
                if (expire) {
                    await this.client.setex(key, expire, valueToStore);
                } else {
                    await this.client.set(key, valueToStore);
                }
            };

            await this._retryWithExponentialBackoff(fn);
            return true;
        } catch (err) {
            console.error('Redis set error:', err);
            return false;
        }
    }

    /**
     * 获取键值
     * @param {string} key 键名
     * @return {Promise<string|Object|null>}
     */
    async get(key: string): Promise<string | object | null> {
        try {
            const fn = async (): Promise<string | object | null> => {
                const value = await this.client.get(key);
                if (value === null) return null;
                
                try {
                    return JSON.parse(value);
                } catch {
                    return value;
                }
            };

            return await this._retryWithExponentialBackoff(fn);
        } catch (err) {
            console.error('Redis get error:', err);
            return null;
        }
    }

    /**
     * 删除键
     * @param {string} key 键名
     * @return {Promise<boolean>}
     */
    async del(key: string): Promise<boolean> {
        try {
            const fn = async (): Promise<void> => {
                await this.client.del(key);
            };

            await this._retryWithExponentialBackoff(fn);
            return true;
        } catch (err) {
            console.error('Redis del error:', err);
            return false;
        }
    }

    /**
     * 设置键的过期时间
     * @param {string} key 键名
     * @param {number} seconds 过期时间(秒)
     * @return {Promise<boolean>}
     */
    async expire(key: string, seconds: number): Promise<boolean> {
        try {
            const fn = async (): Promise<void> => {
                await this.client.expire(key, seconds);
            };

            await this._retryWithExponentialBackoff(fn);
            return true;
        } catch (err) {
            console.error('Redis expire error:', err);
            return false;
        }
    }

    /**
     * 检查键是否存在
     * @param {string} key 键名
     * @return {Promise<boolean>}
     */
    async exists(key: string): Promise<boolean> {
        try {
            const fn = async (): Promise<boolean> => {
                const result = await this.client.exists(key);
                return result === 1;
            };

            return await this._retryWithExponentialBackoff(fn);
        } catch (err) {
            console.error('Redis exists error:', err);
            return false;
        }
    }

    /**
     * 自增操作
     * @param {string} key 键名
     * @param {number} [increment=1] 增量
     * @return {Promise<number|null>} 返回自增后的值
     */
    async incr(key: string, increment: number = 1): Promise<number | null> {
        try {
            const fn = async (): Promise<number> => {
                if (increment === 1) {
                    return await this.client.incr(key);
                } else {
                    return await this.client.incrby(key, increment);
                }
            };

            return await this._retryWithExponentialBackoff(fn);
        } catch (err) {
            console.error('Redis incr error:', err);
            return null;
        }
    }

    /**
     * 自减操作
     * @param {string} key 键名
     * @param {number} [decrement=1] 减量
     * @return {Promise<number|null>} 返回自减后的值
     */
    async decr(key: string, decrement: number = 1): Promise<number | null> {
        try {
            const fn = async (): Promise<number> => {
                if (decrement === 1) {
                    return await this.client.decr(key);
                } else {
                    return await this.client.decrby(key, decrement);
                }
            };

            return await this._retryWithExponentialBackoff(fn);
        } catch (err) {
            console.error('Redis decr error:', err);
            return null;
        }
    }

    /**
     * 发布消息到频道
     * @param {string} channel 频道名
     * @param {string|Object} message 消息
     * @return {Promise<number>} 收到消息的订阅者数量
     */
    async publish(channel: string, message: string | object): Promise<number> {
        try {
            let messageToSend: string;
            if (typeof message === 'object') {
                messageToSend = JSON.stringify(message);
            } else {
                messageToSend = message;
            }

            const fn = async (): Promise<number> => {
                return await this.client.publish(channel, messageToSend);
            };

            return await this._retryWithExponentialBackoff(fn);
        } catch (err) {
            console.error('Redis publish error:', err);
            return 0;
        }
    }

    /**
     * 订阅频道
     * @param {string} channel 频道名
     * @param {Function} callback 消息回调
     */
    subscribe(channel: string, callback: (message: string | object) => void): Redis {
        const subscriber = this.client.duplicate();
        subscriber.subscribe(channel, (err: Error | null) => {
            if (err) {
                console.error('Redis subscribe error:', err);
            }
        });

        subscriber.on('message', (ch: string, message: string) => {
            if (ch === channel) {
                try {
                    const parsedMsg = JSON.parse(message);
                    callback(parsedMsg);
                } catch {
                    callback(message);
                }
            }
        });

        return subscriber;
    }

    /**
     * 关闭Redis连接
     */
    async close(): Promise<void> {
        try {
            await this.client.quit();
        } catch (err) {
            console.error('Redis close error:', err);
        }
    }
}

export default RedisClient;