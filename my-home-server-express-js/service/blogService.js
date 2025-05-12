'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: 日志 service 层
 */

const {prisma} = require('../lib/index.js')

module.exports = class BlogService {
    static async getBlogByPage(req, res) {
        try {
            // 从请求中获取分页参数
            let {current = 1, size = 10} = req.query // 默认第一页，每页10条数据
            // 转换为数字类型
            current = parseInt(current) // 转换为整数
            size = parseInt(size) // 转换为整数

            const skip = (current - 1) * size // 计算跳过的记录数

            // // 查询总记录数
            // const total = await prisma.BLOG.count()
            // // 查询分页数据
            // const records = await prisma.BLOG.findMany({
            //     skip,
            //     take: size
            // })

            // 并行执行两个异步任务
            const [total, records] = await Promise.all([
                prisma.BLOG.count(), // 查询总记录数
                prisma.BLOG.findMany({
                    skip,
                    take: size
                }) // 查询分页数据
            ])

            // 返回分页结果
            return {
                total,
                current,
                size,
                records
            }
        } catch (error) {
            throw error
        }
    }
}
