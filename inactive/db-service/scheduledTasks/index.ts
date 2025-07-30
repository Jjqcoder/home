export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-06-01🍭
 * 作者: jjq
 * 描述: 本文件由 PM2 单实例运行，专门管理定时任务，与多实例运行的 app.js 主应用分离，避免任务重复执行。
 */

// 文档：https://www.npmjs.com/package/safe-timers
const setInterval = require('safe-timers').setInterval;
const controller = require('../controller/my-home-server-express-ts/index')
 
setInterval(async () => {
  console.log('==============定时任务开始==============');
  console.log(`当前时间为：${new Date().toLocaleString()}`);
  
  const res = await controller.visitController.keepLatestVisit()
  console.log(res);

  console.log(`当前时间为：${new Date().toLocaleString()}`);
  console.log('==============定时任务结束==============');
}, 1000 * 60 * 60);// 1小时执行一次

/* 注：此文件内容由pm2调用 所以此处不需要导出内容 */