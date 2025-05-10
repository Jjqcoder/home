'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: 项目入口
 */

const express = require('express')
const app = express()
const port = 3001
const Requester = require('./lib/rabbitmq/requester.js')

app.get('/', async (req, res) => {
    res.send('Hello World!')

    try {
        const response = await Requester.sendRequest('rpc_queue', {data: 'hello!'})
        console.log(`收到响应: ${JSON.parse(response).data}`)
    } catch (error) {
        console.error('发送请求出错:', error)
    }
})

app.listen(port, () => {
    console.log(`server runnning at http://localhost:3001`)
})
