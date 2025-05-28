## 快速启动

-   `pnpm i`安装依赖
-   配置`.env`文件
-   `npx prisma init`初始化`prisma`项目
-   `npx prisma db pull`拉取数据库结构到本项目
-   `npx prisma generate`生成`prisma`客户端
-   `pnpm dev`

## 部署须知

1. 拉取`node`镜像

```sh
sudo docker pull node:18-alpine
```

2. 创建容器并运行

```sh
sudo docker run -d \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  -e TZ=Asia/Shanghai \
  --restart=always \
  --name my-home-server-express-js \
  -p 8080:8080 \
  -v /myProject/my-home-server-express-js:/usr/src/app \
  -w /usr/src/app \
  node:18-alpine \
  sh -c "npm install && npm run prod"
```

3. 将文件上传到`/myProject/my-home-server-express-js`即可
