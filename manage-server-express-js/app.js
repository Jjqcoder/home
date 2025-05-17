'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: 项目入口
 */

const express = require('express')
const app = express()
const port = 3001
const RabbitMQRequester = require('./lib/rabbitmq/index.js') // 导入RabbitMQRequester类

app.use(express.json()) // 解析JSON请求体

/**
 * 发送请求的路由
 */

app.get('/', async (req, res) => {
    res.send('Hello World!')

    // RabbitMQRequester.sendRequest('/manage-server-express-js', {route: '/getBlogByPage', data: {current: 1, size: 2}}).then(response => {
    //     console.log('Received response:', response)
    // })

    const result = await RabbitMQRequester.sendRequest('/manage-server-express-js', {route: '/getBlogByPage', data: {current: 1, size: 2}})
    console.log('Received response:', result)
})

app.listen(port, () => {
    console.log(`server runnning at http://localhost:3001`)
})
