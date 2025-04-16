/* 项目入口 */
'use strict'

const express = require('express') // 引入 Express 模块
const app = express() // 创建一个 Express 应用实例
const port = 3000 // 定义服务器运行的端口号
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
