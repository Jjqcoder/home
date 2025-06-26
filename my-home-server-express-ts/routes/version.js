'use strict'

/**
 * 创建时间: 2025-05-10
 * 作者: jjq
 * 描述: 版本路由
 */

const express = require('express')
const router = express.Router()

const controller = require('../controller/index')

/* 路由挂在开始 */
router.get('/getVersion', controller.versionController.getVersion)
/* 路由挂载结束 */

module.exports = router
