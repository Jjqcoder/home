/**
 * 创建时间: 2025-03-06
 * 作者: jjq
 * 描述: 根路由文件
 */
'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello express')
})

// 导出路由
module.exports = router
