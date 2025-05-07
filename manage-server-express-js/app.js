'use strict'

/**
 * 创建时间: 2025-05-04
 * 作者: jjq
 * 描述: 项目入口
 */

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

require('./lib/rabbitmq/index.js')

app.listen(port, () => {
    console.log(`发布者发布信息！`)
})
