const express = require('express'); // 引入 Express 模块
const app = express(); // 创建一个 Express 应用实例
const port = 3000; // 定义服务器运行的端口号

// 定义一个路由
app.get('/', (req, res) => {
  res.send('Hello World!'); // 返回响应
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});