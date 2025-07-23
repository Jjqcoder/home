## 快速部署
1. 打包项目：`pnpm build`
2. 将打包之后的内容上传服务器，根目录下执行`docker-compose down --rmi all -v`
3. 执行`docker compose up --build -d`