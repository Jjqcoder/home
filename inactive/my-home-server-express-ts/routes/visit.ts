export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 访客路由
 */

const express = require('express')
const router = express.Router()

const controller = require('../controller/index')

/* 路由挂在开始 */
router.get('/allVisit', controller.visitController.getAllVisit)
router.get('/someVisit', controller.visitController.getVisitByLimit)
/* 路由挂载结束 */

module.exports = router
