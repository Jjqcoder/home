export { }; // 让 TypeScript 把该文件当作模块

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
router.use('/blog', require('./blog'))
router.use('/visit', require('./visit'))
router.use('/weather', require('./weather'))
router.use('/ws', require('./ws')) // websocket路由，注意，此处使用router.use 而不是router.ws
router.use('/version', require('./version'))
router.use('/english', require('./english'))
router.use('/dbservice', require('./dbserviceVersion'))
/* 路由挂载结束 */

// 导出路由
module.exports = router
