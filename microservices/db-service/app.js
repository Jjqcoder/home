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
// console.log(1);
require('./lib/rabbltmq/subscribe.js') // require 是同步的 但是其中的内容存在异步的 所以 require 不会阻塞后面的代码的执行
// console.log(2);

app.listen(port, () => {
    console.log(`订阅者已启动！`)
})
