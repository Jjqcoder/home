'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 用于管理本服务要监听并处理的任务
 */

const startQueueListen = require('../lib/index.js').startQueueListen

/* manage-server-express-js项目 */
startQueueListen.startQueueResponder(
    require('../constants/index.js').MANAGE_SERVER_EXPRESS_JS_QUEUE_NAME /* 队列名 */,
    require('../router/manage-server-express-js/index.js') /* 路由 */
)
/* my-home-server-express-js项目 */
/* 其他项目... */
/* 其他项目... */
