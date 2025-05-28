'use strict'

/**
 * 创建时间: 2025-04-17
 * 作者: jjq
 * 描述: 日志路由文件
 */

const express = require('express')
const router = express.Router()
// 引入express-ws模块
const expressWs = require('express-ws')
const controller = require('../controller/index.js')

expressWs(router)

/* 路由挂在开始 */
router.get('/getBlogByPage', controller.blogController.getBlogByPage)
router.get('/getBlogByPageAndTag', controller.blogController.getBlogByPageAndTag)
/* 路由挂载结束 */

module.exports = router
