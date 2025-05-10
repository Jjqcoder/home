'use strict'

/**
 * 创建时间: 2025-05-10
 * 作者: jjq
 * 描述: 版本路由
 */

const express = require('express')
const router = express.Router()

const controller = require('../controller/index.js')

router.get('/getVersion', controller.versionController.getVersion)

module.exports = router
