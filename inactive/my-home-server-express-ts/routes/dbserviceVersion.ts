export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: db-service版本路由
 */


const express = require('express')
const router = express.Router()

const controller = require('../controller/index')

/* 路由挂在开始 */
router.get('/getVersion', controller.dbserviceVersionController.getDbserviceVersion)
/* 路由挂载结束 */

module.exports = router
