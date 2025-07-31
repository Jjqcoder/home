#!/bin/bash
# 设置SQL文件权限
chmod 755 ./init-sql
chmod 644 ./init-sql/*.sql 2>/dev/null || true

# 清除容器然后再启动
docker-compose down --rmi all -v
docker compose up --build -d
