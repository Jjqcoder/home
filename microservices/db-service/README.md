# DB-SERVICE🍃

## 简介

本服务订阅指定的 rabbitmq 主题，执行指定的持久化操作。

## 小贴士

-   [prisma 文档](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-mysql)

## 部署方式

1. 拉取`node`镜像

```sh
sudo docker pull node:18-alpine
```

2. 创建容器并运行

```sh
sudo docker run -d --log-opt max-size=10m --log-opt max-file=3 -e TZ=Asia/Shanghai --restart=always --name db-service -v /myProject/db-service:/usr/src/app -w /usr/src/app node:18-alpine sh -c "npm install && npm run prod"
```

3. 将文件上传到`/myProject/db-service`即可
