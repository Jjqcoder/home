const path = require('path');

module.exports = {
  entry: './src/index.ts', // 入口文件
  target: 'node', // 指定打包目标为 Node.js 环境
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // 支持的文件扩展名
  },
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
};