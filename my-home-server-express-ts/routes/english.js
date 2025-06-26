'use strict'

/**
 * 创建时间: 2025-05-12
 * 作者: jjq
 * 描述: 英语学习相关路由
 */

const express = require('express')
const router = express.Router()

const controller = require('../controller/index')

/* 路由挂在开始 */
router.get('/getSentenceRandomOne', controller.englishController.getSentenceRandomOne)
/* 路由挂载结束 */

module.exports = router
