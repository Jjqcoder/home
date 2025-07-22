## 快速启动

-   `pnpm i`安装依赖
-   配置`.env`文件
-   `npx prisma init`初始化`prisma`项目
-   `npx prisma db pull`拉取数据库结构到本项目
-   `npx prisma generate`生成`prisma`客户端
-   `pnpm dev`

## 部署须知

1. 编译：`pnpm build`
2. 项目上传服务器，根目录下执行`docker-compose down --rmi all -v`
3. 执行`docker-compose up -d`

## 其他
-   项目结构参考`PROJECT-STRUCTURE.md`——在项目根目录下执行 `node generate-structure.js` 即可生成。此命令已经集成进`pnpm dev`

## js迁移为ts之后
- 开发模式
`pnpm dev`
- 生产模式
`pnpm build`
`pnpm prod`
- 注意，改动了源码之后一定要记得重新打包！！！——`pnpm build`

## 小贴士
- 指定prisma客户端的生成地点，让其可控。
