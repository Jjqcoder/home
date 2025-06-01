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

/* 路由挂载开始 */
router.use('/blog', require('./blog.js'))
router.use('/visit', require('./visit.js'))
router.use('/weather', require('./weather.js'))
router.use('/ws', require('./ws.js')) // websocket路由，注意，此处使用router.use 而不是router.ws
router.use('/version', require('./version.js'))
router.use('/english', require('./english.js'))
router.use('/dbservice', require('./dbserviceVersion.js'))
/* 路由挂载结束 */

// 导出路由
module.exports = router
