'use strict'

// server.js
const axon = require('axon');
const sock = axon.socket('rep');
const config = require('./config/index.js')
const code = require('./code.json')
// 引入中间件主类
const Middleware = require('./middleware/index.js');
const logger = require('./logger.js')

// 监听连接
sock.bind(config.port, config.host, () => {
    console.log(`Axon server is running on ${config.host}:${config.port}`);
});

logger.info('服务启动')

// 定义路由处理逻辑
sock.on('message', (req, callback) => {
    // 定义中间件数组
    const middlewares = [Middleware.req_check, Middleware.route_check, Middleware.route_select, Middleware.log_check, Middleware.log_save];

    // 执行中间件
    Middleware.executeMiddlewares(middlewares, req, () => {
        callback(null, { ...code[2000], data: '本次请求处理完成 :)' });
    }, callback); // 将callback传递给中间件执行器
});