'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 天气路由
 */

const express = require('express')
const router = express.Router()
const controller = require('../controller/index.js')

router.post('/getWeather', async (req, res) => {
    const data = await controller.weatherController.getWeather(req, res)
    res.send(data)
})

module.exports = router
