## 简介

每隔 X 秒，你就能占领一个像素点！选择你的颜色，与千万玩家共同争夺这幅无限画布。

## 相关命令

### 开发环境

`pnpm dev` 后 访问`http://localhost:3000/`

### 打包部署

1. 拉取`node`镜像

```sh
sudo docker pull node:18-alpine
```

2. 创建容器并运行

```sh
sudo docker run -d -e TZ=Asia/Shanghai --restart=always --name pixelpulse -p 8082:3000 -v /myProject/pixelpulse:/usr/src/app -w /usr/src/app node:18-alpine sh -c "npm install && npm run dev"
```

3. 将文件上传到`/myProject/pixelpulse`

4. 访问`http://120.27.159.194:8082/`即可
