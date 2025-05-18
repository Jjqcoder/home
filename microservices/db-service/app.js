'use strict'

/**
 * 创建时间: 2025-05-08
 * 作者: jjq
 * 描述: 项目入口
 */

/* 注册任务开始 */
require('./task/index.js')
/* 注册任务结束 */

// 中间件执行器设置
const middlewareExecutor = require('./middleware/index.js').middlewareExecutor
const executor = new middlewareExecutor([require('./middleware/index.js').preCheck, require('./middleware/index.js').postCheck])
executor.run({}).then(() => {
    console.log('执行完成') // 输出: HelloWorld!
})
