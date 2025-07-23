# 开发模式运行 (热重载)
- pnpm start:dev
- 访问`http://localhost:3000`

# 快速部署
1. `pnpm build`打包项目
2. 上传项目到服务器，根目录下执行`docker-compose down --rmi all -v`
3. 执行`docker-compose up -d`

# 生产构建
pnpm build

# 生产模式运行
pnpm start:prod

# 运行测试
pnpm test
pnpm test:e2e
pnpm test:cov  # 带覆盖率