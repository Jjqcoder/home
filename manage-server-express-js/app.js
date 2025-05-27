'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: 项目入口
 */

const express = require('express')
const app = express()
const port = 8081
const cors = require('cors')
// const RabbitMQRequester = require('./lib/rabbitmq/index.js') // 导入RabbitMQRequester类

app.use(
    cors({
        origin: true, // 或指定具体域名 ['http://example.com', 'https://example.com']
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true // 如果需要跨域携带凭证
    })
)

app.use(express.json()) // 解析JSON请求体

/* 路由挂载开始 */
app.use('/blog', require('./routes/index.js')) // 挂载博客相关路由
/* 路由挂载结束 */
app.listen(port, () => {
    console.log(`server runnning at http://localhost:8081`)
})
