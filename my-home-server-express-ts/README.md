# my-home-server-express-ts

## 相关命令

### 开发环境

-   `pnpm dev`

### 生产环境(部署流程)

1.  `pnpm build`得到 `dist` 文件夹
2.  将文件上传服务器，赋权限`chmod -R 777 ./*`
3.  构建镜像：`docker build -t my-home-server-express-ts-image .`
4.  创建容器：`docker run --name my-home-server-express-ts --restart=always -d  -e TZ=Asia/Shanghai -p 8081:8080 my-home-server-express-ts-image`
