/* 项目入口 */
'use strict'

const express = require('express') // 引入 Express 模块
const app = express() // 创建一个 Express 应用实例
const port = 8080 // 定义服务器运行的端口号
const expressWs = require('express-ws')
const cors = require('cors')
const bodyParser = require('body-parser') // 引入 body-parser 模块
app.use(
    cors({
        origin: true, // 或指定具体域名 ['http://example.com', 'https://example.com']
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true // 如果需要跨域携带凭证
    })
)
expressWs(app) // 注意 项目入口需要使用expressWs(app) 子路由中的ws配置才会生效！
// 全局启用 CORS
// 解析 JSON 格式的请求体
app.use(bodyParser.json())
// 引入自定义路由
const router = require('./src/routes/index.js')
// 指定 public 目录为静态资源目录
app.use(express.static('./src/public'))
// 注册路由
app.use('/', router)

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
