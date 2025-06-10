/**
 * 创建时间: 2025-06-01🍭
 * 作者: jjq
 * 描述: 本文件由 PM2 单实例运行，专门管理定时任务，与多实例运行的 app.js 主应用分离，避免任务重复执行。
 */

// 文档：https://www.npmjs.com/package/safe-timers
const setInterval = require('safe-timers').setInterval;
 
setInterval(function (msg) {
  console.log(msg);
}, 1000, '每秒执行一次');

// 注：此文件内容由pm2调用 所以此处不需要导出内容