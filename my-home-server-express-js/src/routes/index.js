'use strict'

/**
 * 创建时间: 2025-03-06
 * 作者: jjq
 * 描述: 根路由文件
 */

const express = require('express')
const router = express.Router()
const expressWs = require('express-ws')

expressWs(router)

// 引入中间件类
const Middleware = require('./../middlewares/index.js')

/* 路由挂载开始 */
router.use(
    '/blog',
    Middleware.logger, // 日志中间件
    require('./blog.js')
)
router.use('/visit', require('./visit.js'))

router.use('/weather', require('./weather.js'))

router.ws('/onlineCount', require('./onlineCount.js'))
/* 路由挂载结束 */

// 导出路由
module.exports = router
