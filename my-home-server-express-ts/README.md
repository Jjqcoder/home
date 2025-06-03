# my-home-server-express-ts

## 相关命令

### prisma相关
-   `npx prisma init`初始化`prisma`项目
-   `npx prisma db pull`拉取数据库结构到本项目
-   `npx prisma generate`生成`prisma`客户端

### 开发环境

-   `pnpm dev`

### 生产环境(部署流程)

1.  `pnpm build`得到 `dist` 文件夹
2.  将文件上传服务器，赋权限`chmod -R 777 ./*`
3.  构建镜像：`docker build -t my-home-server-express-ts-image .`
4.  创建容器：`docker run --name my-home-server-express-ts --restart=always -d --memory=1G --memory-swap=1.5G  --log-opt max-size=10m --log-opt max-file=3 -e TZ=Asia/Shanghai -p 8081:8080 my-home-server-express-ts-image`
