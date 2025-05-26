'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: 项目入口
 */

const express = require('express')
const app = express()
const port = 8081
const RabbitMQRequester = require('./lib/rabbitmq/index.js') // 导入RabbitMQRequester类

app.use(express.json()) // 解析JSON请求体

/**
 * 发送请求的路由
 */
const service = require('./service/index.js') // 导入服务层入口
app.get('/', async (req, res) => {
    res.send('Hello World!')

    let result = await service.blogService.insertBlog()
    console.log(result)
})

app.listen(port, () => {
    console.log(`server runnning at http://localhost:8081`)
})
