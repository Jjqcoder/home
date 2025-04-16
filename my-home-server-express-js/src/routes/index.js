/**
 * 创建时间: 2025-03-06
 * 作者: jjq
 * 描述: 根路由文件
 */
'use strict'

const express = require('express')
const router = express.Router()

// 引入中间件类
const Middleware = require('./../middlewares/index.js')
// 引入博客路由
const blog = require('./blog.js')

/* 路由挂载开始 */
// 使用中间件
router.use(
    '/blog',
    Middleware.logger, // 日志中间件
    blog // 博客路由
)
/* 路由挂载结束 */

// 导出路由
module.exports = router
