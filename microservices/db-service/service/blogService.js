'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 日志服务层
 */

const prisma = require('../lib/index').prisma

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
            // 从请求中获取分页参数
            let {current = 1, size = 10, tags} = req // 默认第一页，每页10条数据
            // 转换为数字类型
            current = parseInt(current) // 转换为整数
            size = parseInt(size) // 转换为整数
            const skip = (current - 1) * size // 计算跳过的记录数
    
            // 将tags字符串分割成数组
            const tagArray = tags.split('|').map(tag => tag.trim()).filter(tag => tag);
            
            // 构建查询条件
            let whereCondition = {};
            
            if (tagArray.length === 1) {
                // 单个标签的情况
                whereCondition = {
                    BLOG_TAGS: {
                        contains: tagArray[0]
                    }
                };
            } else {
                // 多个标签的情况，需要同时包含所有标签
                whereCondition = {
                    AND: tagArray.map(tag => ({
                        BLOG_TAGS: {
                            contains: tag
                        }
                    }))
                };
            }
    
            // 并行执行两个异步任务
            const [total, records] = await Promise.all([
                prisma.BLOG.count({
                    where: whereCondition
                }), // 查询总记录数
                prisma.BLOG.findMany({
                    skip,
                    take: size,
                    where: whereCondition
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
            console.log('获取日志失败!', String(error))
            throw error
        }
    }

    static async getAllBlog() {
        try {

            // 并行执行两个异步任务
            const [total, records] = await Promise.all([
                prisma.BLOG.count(), // 查询总记录数
                prisma.BLOG.findMany({
                })
            ])
            // if (1) {
            //     throw "测试错误"
            // }

            // 返回分页结果
            return {
                total,
                records
            }
        } catch (error) {
            console.log('获取日志失败!', JSON.stringify(error))

            throw error
        }
    }

    static async getAllTag() {
        // 获取BLOG表中的全TAGS字段的值 做去重处理(以数组方式返回)
        let allTag = await prisma.$queryRaw`SELECT DISTINCT BLOG_TAGS FROM BLOG`
        /* 去重处理开始 */
        let uniqueTags = [];
        allTag.forEach(tag => {
            
            let tagsArray = tag.BLOG_TAGS.split('|').map(t => t.trim());
            uniqueTags.push(...tagsArray);
        });
        uniqueTags = [...new Set(uniqueTags)];
        /* 去重处理结束 */
        return uniqueTags
    }
}
