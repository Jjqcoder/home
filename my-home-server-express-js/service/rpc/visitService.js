'use strict'

/**
 * 创建时间: 2025-05-25
 * 作者: jjq
 * 描述: 访客 服务层(rpc)
 */

module.exports = class VisitService {
    static async getAllVisit(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {route: '/getAllVisit', data: {...req?.query}})
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

    // 获取指定数量的数据 默认为500条（前端不会发送limit数量）
    static async getVisitByLimit(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {route: '/getVisitByLimit', data: {...req.query}})
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
