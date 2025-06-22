module.exports = {
    apps: [
        /* 主应用（多实例）配置开始 */
        {
            // 应用的名称，用于在 PM2 中标识应用
            name: 'db-service',

            // 入口文件路径，相对于项目根目录
            script: './dist/app.js',

            // 传递给入口文件的命令行参数，如果不需要可以留空
            args: '',

            // 实例数量，'max' 表示根据 CPU 核心数自动分配实例数量
            instances: 4,

            // 是否自动重启应用，如果应用崩溃或达到内存限制
            autorestart: true,

            // 是否开启文件监控自动重启，生产环境中通常设置为 false
            watch: false,

            // 当应用占用内存超过指定值时自动重启，单位可以是 MB 或 GB
            max_memory_restart: '200M',

            // 环境变量配置，项目启动命令中的【cross-env NODE_ENV=development】将会传递到此处
            env: {
                NODE_ENV: process.env.NODE_ENV || "development"
            },

            // 禁用进程统计(因为 Windows 新版已移除 wmic)
            pmx: false,          // 关闭 PM2 的监控扩展
            disable_metrics: true // 禁用指标收集
        },
        /* 主应用（多实例）配置结束 */
        /* 定时任务（单实例）配置开始 */
        {
            name: 'scheduled-tasks',  // 唯一名称
            script: './scheduledTasks/index.js',
            instances: 1,              // 关键：只运行 1 个实例
            autorestart: true,
            watch: false,
            env: {
              NODE_ENV: 'production'
            }
          }
        /* 定时任务（单实例）配置结束 */
    ]
}

// 关闭所有应用
// pm2 stop all

// 查看所有应用状态
// pm2 list

// 删除所有应用
// pm2 delete all
