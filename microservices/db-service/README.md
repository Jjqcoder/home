# DB-SERVICE🍃

## 简介

本服务订阅指定的 rabbitmq 主题，执行指定的持久化操作。

## 小贴士

1.   [prisma 文档](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-mysql)
2. windows下正常但是linux环境prisma报错：
```text
Invalid `prisma.$queryRaw()` invocation:
Prisma Client could not locate the Query Engine for runtime "linux-musl-openssl-3.0.x".
This happened because Prisma Client was generated for "windows", but the actual deployment required "linux-musl-openssl-3.0.x".
```
需要在prisma/schema.prisma的generator client中增加如下配置：
```text
binaryTargets = ["native", "linux-musl-openssl-3.0.x"]// 指定 Prisma 引擎（Query Engine）需要兼容哪些操作系统环境。
engineType    = "binary"// 使用本地编译的二进制查询引擎（.node 文件），性能更高。(当添加上方的参数之后，遇到网络问题无法自动下载引擎时，强制使用二进制模式会有一些缓解)
```

## 部署方式

1. 拉取`node`镜像

```sh
sudo docker pull node:18-alpine
```

2. 创建容器并运行
> 注：cpu核心数【--cpus】不能超出服务器cpu核心数，否则会报错
```sh
sudo docker run -d \
  --cpus=2 \
  --memory=1G --memory-swap=1.5G \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  -e TZ=Asia/Shanghai \
  --restart=always \
  --name db-service \
  -v /myProject/db-service:/usr/src/app \
  -w /usr/src/app \
  node:18-alpine \
  sh -c "npm install && npm run prod"
```

3. 将文件上传到`/myProject/db-service`即可
