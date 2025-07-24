## 部署流程
1. `pnpm build`打包项目
2. 上传项目到服务器
3. （项目根目录执行）停止并移除容器、网络、镜像和卷（彻底清理）：服务器执行`docker-compose down --rmi all -v`
4. 项目根目录执行`docker compose up --build -d`