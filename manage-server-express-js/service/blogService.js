/**
 * 创建时间: 2025-05-26
 * 作者: jjq
 * 描述: blog服务类
 */

const prisma = require('../lib/prisma/index.js')

module.exports = class BlogService {
    static async insertOne(req, res) {
        // 插入一条blog数据
        await prisma.BLOG.create({
            data: {
                BLOG_TITLE: req.body.BLOG_TITLE,
                BLOG_CONTENT: req.body.BLOG_CONTENT,
                BLOG_TAGS: req.body?.BLOG_TAGS??"随笔"// 默认的标签为随笔
            }
        })
    }
}
