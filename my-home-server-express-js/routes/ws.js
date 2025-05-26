'use strict'

/**
 * 创建时间: 2025-05-15
 * 作者: jjq
 * 描述: websocket路由
 */

const express = require('express')
const router = express.Router()
const expressWs = require('express-ws')

expressWs(router)

/* 路由挂在开始 */
router.ws('/onlineCount', require('../service/index.js').onlineCountService.ws) /* [ws实现]在线人数 */
// router.ws('/onlineCount', require('../service/index.js').onlineCountService.wsAndRedis) /* [ws+redis实现]在线人数 */
/* 路由挂载结束 */

// 导出路由
module.exports = router
