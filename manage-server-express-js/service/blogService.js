/**
 * 创建时间: 2025-05-26
 * 作者: jjq
 * 描述: blog服务类
 */

const prisma = require('../lib/prisma/index.js')

module.exports = class BlogService {
    static async insertBlog() {
        // 插入一条blog数据
        await prisma.BLOG.create({
            data: {
                BLOG_TITLE: '测试！！！',
                BLOG_CONTENT: '测试'
            }
        })
    }
}
