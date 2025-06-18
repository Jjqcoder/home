export {}; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: 日志 service 层
 */

const {prisma} = require('../lib/index')
const RabbitMQRequester = require('../rpc/rabbitmq/index')

module.exports = class BlogService {
    static async getBlogByPage(req, res) {
        // 使用rpc调用
        try {
            // rpc测试
            if (1) {
                let res = await RabbitMQRequester.sendRequest('/manage-server-express-js', {route: '/getBlogByPage', data: {current: 1, size: 2}})
                res = JSON.parse(res)
                if (res.code === 200) {
                    console.log('结果:', res.data)
                    return res.data
                } else {
                    throw JSON.stringify(res)
                }
            }
            // 从请求中获取分页参数
            let {current = 1, size = 10} = req.query // 默认第一页，每页10条数据
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
            console.log('获取分页数据失败:', error)

            throw error
        }
    }
}
