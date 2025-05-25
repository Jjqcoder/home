'use strict'

/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 日志 service 层(rpc)
 */

const {prisma} = require('../../lib/index.js')
const RabbitMQRequester = require('../../rpc/rabbitmq/index.js')

module.exports = class BlogService {
    static async getBlogByPage(req, res) {
        // 使用rpc调用
        try {
            console.log('请求参数:', req.query)
            // if (1) {
            //     throw '测试错误'
            // }
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {route: '/getBlogByPage', data: {...req.query}})
            res = JSON.parse(res)
            if (res.code === 200) {
                console.log('结果:', res.data)
                return res.data
            } else {
                throw res.msg
            }
        } catch (error) {
            console.log('获取分页数据失败:', error)

            throw error
        }
    }
}
