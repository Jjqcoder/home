const express = require('express'); // 引入 Express 模块
const app = express(); // 创建一个 Express 应用实例
const port = 3000; // 定义服务器运行的端口号
// 引入自定义路由
const myRouter = require('./src/routes/index.js');
// 引入日志中间件
const loggerMiddleware = require('./src/middlewares/loggerMiddleware.js');

// 指定 public 目录为静态资源目录 ctrl+f5强制刷新页面
app.use(express.static('./src/public'));
// 注册日志中间件(需要在路由的前面注册)
app.use(loggerMiddleware);
// 注册路由
app.use('/', myRouter);


// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});