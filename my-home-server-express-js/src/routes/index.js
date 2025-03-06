/**
 * 创建时间: 2025-03-06
 * 作者: jjq
 * 描述: 路由文件
 */

const express = require('express');
const myRouter = express.Router();

myRouter.get('/', (req, res) => {
  res.send('自定义路由测试！');
});

// 导出路由
module.exports = myRouter;