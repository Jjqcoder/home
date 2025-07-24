'use strict'

/**
 * 创建时间: 2025-04-19
 * 作者: jjq
 * 描述: 路由校验中间件
 */
const Enum = require('./../lib/enum/index.js')
const code = require('./../code.json')
const logger = require('./../logger.js')
const Controller = require('./../controller/index.js')

module.exports = async (req, next, callback) => {
    try {
        logger.info(`middleware >>> route_check >>> req >>> ${JSON.stringify(req)}`)
        const { route, body } = req;
        console.log('body', body);

        // 路由不存在
        if (!Enum.route.includes(route)) {
            logger.error(`middleware >>> route_check >>> req >>> ${JSON.stringify(req)} >>> error >>> route:${route} >>> route is not exist`)
            throw { ...code[4000], data: `route:${route}` }
        }
        // 路由存在
        switch (route) {
            case '/add':
                logger.info(`middleware >>> route_check >>> req >>> ${JSON.stringify(req)} >>> route:${route} >>> route is exist`)
                await Controller.log.addLog(body)
                break;
            default:
                break;
        }
        console.log('enum', Enum.route);


        next()// 代码无错误 调用next()
    } catch (error) {
        callback(error, { code: 5000, data: '执行 route_check 中间件的过程中发生了错误' });// 发生错误 调用callback
    }

}