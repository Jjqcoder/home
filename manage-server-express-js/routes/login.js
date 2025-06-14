/**
 * 创建时间: 2025-06-14
 * 作者: jjq
 * 描述: 登录路由
 */

const express = require('express')
const router = express.Router()

/* 路由挂载开始 */
router.post('/loginAndRegister', require('../controller/loginController').loginAndRegister) // 创建博客
/* 路由挂载结束 */

module.exports = router
