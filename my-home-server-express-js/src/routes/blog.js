'use strict'

/**
 * 创建时间: 2025-04-17
 * 作者: jjq
 * 描述: 日志路由文件
 */

const express = require('express')
const router = express.Router()

// 引入express-ws模块
const expressWs = require('express-ws')

expressWs(router)

router.get('/getBlogByPage', (req, res) => {
    console.log(1)
    res.send('Hello World!')
})

router.ws('/ws', (ws, req) => {
    // 处理WebSocket连接
    ws.on('message', msg => {
        ws.send(msg) // 回环测试
    })
})

module.exports = router
