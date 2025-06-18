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
  --memory=1G --memory-swap=1.5G \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  -e TZ=Asia/Shanghai \
  --restart=always \
  --name my-home-server-express-ts \
  -p 8080:8080 \
  -v /myProject/my-home-server-express-ts:/usr/src/app \
  -w /usr/src/app \
  node:18-alpine \
  sh -c "npm install && npm run start"
```

3. 将文件上传到`/myProject/my-home-server-express-ts`即可
4. 注：更新项目时，将文件上传到指定文件夹后重启容器即可。

## 其他
-   项目结构参考`PROJECT-STRUCTURE.md`——在项目根目录下执行 `node generate-structure.js` 即可生成。此命令已经集成进`pnpm dev`

## js迁移为ts之后
- 开发模式
`pnpm dev`
- 生产模式
`pnpm build`
`pnpm prod`
- 注意，改动了源码之后一定要记得重新打包！！！——`pnpm build`
