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

// 使用中间件
router.get('/', Middleware.logger, (req, res) => {
    res.send('hello express')
})

// 导出路由
module.exports = router
