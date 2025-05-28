'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 日志服务层
 */

const prisma = require('../lib/prisma.js')

module.exports = class blogService {
    static async getBlogByPage(req) {
        try {
            // 从请求中获取分页参数
            let {current = 1, size = 10} = req // 默认第一页，每页10条数据
            // 转换为数字类型
            current = parseInt(current) // 转换为整数
            size = parseInt(size) // 转换为整数

            const skip = (current - 1) * size // 计算跳过的记录数

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
            console.log('获取日志失败!', JSON.stringify(error))

            throw error
        }
    }
    static async getBlogByPageAndTag(req) {
        try {
            console.log('我被调用了,demo1')

            // 从请求中获取分页参数
            let {current = 1, size = 10, tags} = req // 默认第一页，每页10条数据
            // 转换为数字类型
            current = parseInt(current) // 转换为整数
            size = parseInt(size) // 转换为整数

            const skip = (current - 1) * size // 计算跳过的记录数

            // 并行执行两个异步任务
            const [total, records] = await Promise.all([
                // prisma.BLOG.count(), // 查询指定tag的总记录数
                prisma.BLOG.count({
                    where: {
                        BLOG_TAGS: {
                            contains: tags // 查询BLOG_TAGS字段包含tags的记录数
                        }
                    }
                }), // 查询总记录数
                prisma.BLOG.findMany({
                    skip,
                    take: size,
                    // 获取数据库中BLOG_TAGS字段包含tags（多个会用|隔开 如A|B）中的记录
                    where: {
                        BLOG_TAGS: {
                            contains: tags
                        }
                    }
                }) // 查询分页数据
            ])
            console.log('total:', total, 'records:', records)

            // 返回分页结果
            return {
                total,
                current,
                size,
                records
            }
        } catch (error) {
            console.log('获取日志失败!', JSON.stringify(error))

            throw error
        }
    }
}
