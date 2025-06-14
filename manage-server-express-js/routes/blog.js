/**
 * 创建时间: 2025-05-28
 * 作者: jjq
 * 描述: 博客路由
 */

const express = require('express')
const router = express.Router()

/* 路由挂载开始 */
router.post('/insertOne', require('../controller').blogController.insertOne) // 创建博客
/* 路由挂载结束 */

module.exports = router
