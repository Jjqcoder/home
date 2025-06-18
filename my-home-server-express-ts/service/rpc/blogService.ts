export {}; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 日志 service 层(rpc)
 */

const RabbitMQRequester = require('../../rpc/rabbitmq/index')
const DB_SERVICE_KEY = require('../../config/index').get('DB_SERVICE_KEY')
const DB_SERVICE_QUEUE_NAME = require('../../config/index').get('DB_SERVICE_QUEUE_NAME')

module.exports = class BlogService {
    static async getBlogByPage(req, res) {
        // 使用rpc调用
        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {
                route: '/getBlogByPage',
                data: {...req?.ueqry, dbServiceKey: DB_SERVICE_KEY}
            })
            res = JSON.parse(res)
            if (res.code === 200) {
                return res.data
            } else {
                throw JSON.stringify(res)
            }
        } catch (error) {
            throw error
        }
    }

    static async getBlogByPageAndTag(req, res) {
        console.log('👆')

        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {
                route: '/getBlogByPageAndTag',
                data: {...req?.query, dbServiceKey: DB_SERVICE_KEY}
            })
            res = JSON.parse(res)
            if (res.code === 200) {
                return res.data
            } else {
                throw JSON.stringify(res)
            }
        } catch (error) {
            console.log(error)
        }
    }
    catch(error) {
        throw error
    }

    static async getAllBlog(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {
                route: '/getAllBlog',
                data: {...req?.query, dbServiceKey: DB_SERVICE_KEY}
            })
            res = JSON.parse(res)
            if (res.code === 200) {
                return res.data
            } else {
                throw JSON.stringify(res)
            }
        } catch (error) {
            throw error
        }
    }

    static async getAllTag(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest(DB_SERVICE_QUEUE_NAME, {
                route: '/getAllTag',
                data: {...req?.query, dbServiceKey: DB_SERVICE_KEY}
            })
            res = JSON.parse(res)
            if (res.code === 200) {
                return res.data
            } else {
                throw JSON.stringify(res)
            }
        } catch (error) {
            throw error
        }
    }
}
