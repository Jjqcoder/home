'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: 项目入口
 */

const express = require('express')
const app = express()
const port = 3000
const RabbitMQRequester = require('./lib/rabbitmq/index.js')

app.get('/', async (req, res) => {
    res.send('Hello World!')

    const requester = new RabbitMQRequester({
        queueName: 'rpc_queue'
    })

    try {
        await requester.initialize()

        const response = await requester.sendRequest('Hello, RabbitMQ RPC!')
        console.log(`收到响应: ${response}`)

        // await requester.close()
    } catch (error) {
        console.error('运行请求者出错:', error)
        await requester.close()
    }
})

app.listen(port, () => {
    console.log(`server runnning at http://localhost:3000`)
})
