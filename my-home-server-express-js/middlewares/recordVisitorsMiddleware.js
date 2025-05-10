'use strict'

/**
 * 创建时间: 2025-04-29
 * 作者: jjq
 * 描述: 访客记录中间件
 */
const prisma = require('../lib/prisma.js')

module.exports = async (req, res, next) => {
    try {
        // 获取访客ip
        let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        if (ip === '::1') {
            ip = '127.0.0.1 '
        }
        // 将此 ip 插入到VISIT_RECORDER中
        const res = await prisma.VISIT_RECORDER.create({
            data: {
                IP: ip,
                // 时间格式为timestamp
                CREATE_TIME: new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString()
            }
        })
        // console.log('插入访客记录' + JSON.stringify(res))
    } catch (error) {
        console.log('插入访客记录失败', error)
    } finally {
        next() // 继续执行后续的代码
    }
}
