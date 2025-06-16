/**
 * 创建时间: 2025-06-15
 * 作者: jjq
 * 描述: 路由入口
 */

const express = require('express')
const router = express.Router()

/* 挂载开始 */
router.use('/blog', require('./blog.js'))
router.use('/login', require('./login.js'))
/* 挂载结束 */

module.exports = router
