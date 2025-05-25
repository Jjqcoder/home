'use strict'

const e = require('express')
/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 英语学习服务层(rpc)
 */

const {prisma} = require('../../lib/index.js')
const RabbitMQRequester = require('../../rpc/rabbitmq/index.js')

module.exports = class EnglishService {
    // 随机获取ENGLISH表中的一个句子
    static async getSentenceRandomOne(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {
                route: '/getSentenceRandomOne',
                data: {...req?.query}
            })
            console.log('获取随机句子结果:', res)

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
