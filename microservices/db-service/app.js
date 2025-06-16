'use strict'

/**
 * 创建时间: 2025-05-08
 * 作者: jjq
 * 描述: 项目入口
 */

/* 打印当前环境（生产环境OR开发环境）开始 */
const env = process.env.NODE_ENV || "development"; // 默认 development

if (env === "production") {
    console.log("✅ 运行在生产环境");
    // 生产环境配置（如数据库、缓存、日志等）
} else {
    console.log("🛠️ 运行在开发环境");
    // 开发环境配置（如调试模式、本地数据库等）
}
/* 打印当前环境（生产环境OR开发环境）结束 */

/* 注册监听任务开始 */
require('./task/index.js')
/* 注册监听任务结束 */

