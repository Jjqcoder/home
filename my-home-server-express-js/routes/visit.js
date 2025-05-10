'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客路由
 */

const express = require('express')
const router = express.Router()

const controller = require('../controller/index.js')

router.get('/allVisit', controller.visitController.getAllVisit)
router.get('/someVisit', controller.visitController.getVisitByLimit)

module.exports = router
