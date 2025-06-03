/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog 服务层
 */

export const blogService = class {
    static async getBlogByPage(p1: number, p2: number) {
        return '我是 blog 服务层的内容'+p1+p2
    }
}