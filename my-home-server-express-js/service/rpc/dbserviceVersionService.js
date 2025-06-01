'use strict'

/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: dbservice 版本服务层
 */

const RabbitMQRequester = require('../../rpc/rabbitmq/index.js')

module.exports = class DbserviceVersionService {
    // 获取
    static async getDbserviceVersion(req, res) {
        try {
            let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {
                route: '/getDbserviceVersion',
                data: {...req?.query, dbServiceKey: require('../../config/index.js').get('DB_SERVICE_KEY')}
            })
            res = JSON.parse(res)
            console.log('res⚠️', res);
            console.log('res.code⚠️', res.code);
            console.log('typeof res.code⚠️', typeof res.code);// string
            
            if (res.code === 200) {
                console.log('res.data⚠️', res.data);
                
                return res.data
            } else {
                throw JSON.stringify(res)
            }
        } catch (error) {
            throw error
        }
    }
}
