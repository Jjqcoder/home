## 快速部署
1. 打包项目：`pnpm build`
2. 将打包之后的内容上传服务器，根目录下执行`docker-compose down --rmi all -v`
3. 执行`docker compose up --build -d`
4. 访问[此链接](https://www.wbeishangw.top:444/)进行访问。注意，阿里云安全组记得打开444、81端口。