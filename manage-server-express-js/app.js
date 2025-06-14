'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: 项目入口
 */

/* 导入依赖开始 */
const express = require('express')
const app = express()
const port = 8081
const cors = require('cors')
/* 导入依赖结束 */

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
app.use('/', require('./routes/index.js'))
/* 路由挂载结束 */

app.listen(port, () => {
    console.log(`server runnning at http://localhost:8081`)
})
