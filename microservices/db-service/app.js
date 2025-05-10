'use strict'

/**
 * 创建时间: 2025-05-08
 * 作者: jjq
 * 描述: 项目入口
 */

const Responder = require('./lib/rabbitmq/responser.js')

const responder = new Responder(
    'rpc_queue', // 队列名称
    request => {
        // 约定使用对象进行交流
        console.log(`[收到请求]: ${JSON.parse(request).data}`)
        // 这里可以添加自定义的请求处理逻辑
        return `${JSON.stringify({data: '响应数据'})}`
    }
)

responder.start()
