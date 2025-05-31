/* 项目入口 */
'use strict'

const express = require('express') // 引入 Express 模块
const app = express() // 创建一个 Express 应用实例
const port = 8080 // 定义服务器运行的端口号
const expressWs = require('express-ws')
const cors = require('cors')
const bodyParser = require('body-parser') // 引入 body-parser 模块
const middlewares = require('./middlewares/index.js') // 引入自定义中间件
const router = require('./routes/index.js') // 引入自定义路由
const morgan = require('morgan') // 引入 morgan 模块
const responseTime = require('response-time') // 引入 response-time 中间件
const rateLimit = require('express-rate-limit')// 引入express-rate-limit模块
const R = require('./utils/R.js')
// 创建限流规则（一分钟一百请求）
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 单位时间（毫秒）
    max: 20, // 每个IP在windowMs毫秒内最多max个请求
    standardHeaders: true, // 返回速率限制信息在 `RateLimit-*` headers中
    legacyHeaders: false, // 禁用 `X-RateLimit-*` headers
    message: `${JSON.stringify(R.err(429, '您的请求太频繁🥲请一分钟后再试🤝', null))}`, // 超过限制时的响应消息
  });
app.use(
    cors({
        origin: true, // 或指定具体域名 ['http://example.com', 'https://example.com']
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true // 如果需要跨域携带凭证
    })
)
app.use(limiter)// 使用限流规则
expressWs(app) // 注意 项目入口需要使用expressWs(app) 子路由中的ws配置才会生效！
// 全局启用 CORS
// 解析 JSON 格式的请求体
app.use(bodyParser.json())

// 指定 public 目录为静态资源目录
app.use(express.static('./public'))

// 上线后依赖报错
// 使用 response-time 中间件来计算请求的处理时间 时间信息位于响应头的 X-Response-Time 字段中
app.use(responseTime())

// 上线后会报依赖错误 暂不使用
// 使用 morgan 中间件来记录请求日志
app.use(morgan('combined'))
// 注册路由
app.use(
    '/',
    middlewares.logger, // 日志中间件
    middlewares.recordVisitors, // 记录访问者IP的中间件
    router
)

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
