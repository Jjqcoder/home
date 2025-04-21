# 使用官方的 Node.js 基础镜像
FROM node:14-alpine

# 创建并设置工作目录
WORKDIR /app

# 复制项目依赖文件
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目的全部文件
COPY . .

# 暴露应用程序运行的端口
EXPOSE 3000

# 启动应用程序
CMD ["node", "index.js"]

# 构建镜像命令
# docker build -t my-node-app .
# 创建容器命令
# docker run -d -p 3000:3000 my-node-app