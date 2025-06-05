#!/bin/sh

# 执行docker logs -f my-home-client-vue-js 以查看docker日志
# 使用 grep 和 awk 获取版本信息
VERSION=$(grep '"version"' /usr/share/nginx/html/package.json | awk -F'"' '{print $4}')
NAME=$(grep '"name"' /usr/share/nginx/html/package.json | awk -F'"' '{print $4}')

# 打印版本信息
echo "Starting $NAME version $VERSION"

# 执行原始的 CMD
exec "$@"