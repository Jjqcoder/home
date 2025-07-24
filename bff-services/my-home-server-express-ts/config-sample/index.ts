'use strict'

/**
 * 创建时间: 2025-05-01
 * 作者: jjq
 * 描述: 使用 map 代替对象
 */

/* 类型相关内容开始 */
import { Config } from '../types/config'
/* 类型相关内容结束 */

const config = new Map<keyof Config, Config[keyof Config]>([
    ['key', 'xxx'] /* 高德天气查询key */,
    [
        'redisConf',
        {
            host: 'xxx', // Redis服务器IP地址
            port: 123, // Redis服务器端口号，默认为6379
            password: 'xx' // redis密码
        }
    ],
    [
        'DB_SERVICE_KEY', // DB_SERVICE秘钥
        'xxx'
    ],
    [
        'DB_SERVICE_QUEUE_NAME', // DB_SERVICE队列名称
        '/my-home-server-express-ts'
    ],
    [
        'rabbitmqConf',// rabbitmq配置
        {
            ip: 'xxx',
            rabbitmq_user: 'xxx',
            rabbitmq_password: 'xxx',
            rabbitmq_port: 123
        }
    ]
    /* 保持此样式 */
])
module.exports = config
