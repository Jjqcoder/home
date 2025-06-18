'use strict'

/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: db-service版本路由
 */


const express = require('express')
const router = express.Router()

const controller = require('../controller/index.js')

/* 路由挂在开始 */
router.get('/getVersion', controller.dbserviceVersionController.getDbserviceVersion)
/* 路由挂载结束 */

module.exports = router
