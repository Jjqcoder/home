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
            // const {current, size} = req.query
            // console.log('crrent', current, 'size', size)

            // // 计算跳过的记录数
            // const skip = (current - 1) * size

            // // 查询分页数据
            // const blogs = await prisma.BLOG.findMany({
            //     skip, // 跳过前面的记录
            //     take: size // 每页的记录数
            // })

            // return blogs
            return prisma.BLOG.findMany()
        } catch (error) {
            return {error: error}
        }
    }
}
