const express = require('express')
const app = express()
const PORT = 3000

require('./lib/rabbitmq/rabbitmq.js')
// 启动服务器
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
