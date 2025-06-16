/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog 服务层
 */

import { prisma } from '../lib/index'
import { BlogPaginationResult } from '../types/index'

export const blogService = class {
    static async getBlogByPage(current: number, size: number): Promise<BlogPaginationResult> {
        // return '我是 blog 服务层的内容'+p1+p2
        const skip = (current - 1) * size // 计算跳过的记录数

            // 并行执行两个异步任务
            const [total, records] = await Promise.all([
                prisma.bLOG.count(), // 查询总记录数
                prisma.bLOG.findMany({
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
    }
}