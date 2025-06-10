'use strict'

/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 日志 service 层(rpc)
 */

const RabbitMQRequester = require('../../rpc/rabbitmq/index.js')
const DB_SERVICE_KEY = require('../../config/index.js').get('DB_SERVICE_KEY')

module.exports = class BlogService {
    static async getBlogByPage(req, res) {
        // 使用rpc调用
        try {
            // if (1) {
            //     throw '测试错误'
            // }
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {
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
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {
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
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {
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
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {
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
