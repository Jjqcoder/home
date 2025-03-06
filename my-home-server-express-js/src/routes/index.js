/**
 * 创建时间: 2025-03-06
 * 作者: jjq
 * 描述: 路由文件
 */

const express = require('express');
const myRouter = express.Router();
// 测试prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

myRouter.get('/', (req, res) => {
  res.send('自定义路由测试！');
});


// 测试路由：获取所有用户
myRouter.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 导出路由
module.exports = myRouter;