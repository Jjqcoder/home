/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: blog 控制层
 */

const R = require('../../lib/index.js').R
const blogService = require('../../service/index.js').blogService

module.exports = class BlogController {
    static async getBlogByPage(req) {
        try {
            return R.ok(200, '获取日志成功', await blogService.getBlogByPage(req))
        } catch (error) {
            return R.err(
                500,
                '获取日志失败',
                String(error)
            ) /* 注：Error 对象默认没有定义 toJSON() 方法，所以 JSON.stringify(error) 会返回 {}（空对象），导致无法看到错误信息。此处使用String(错误对象)来查看错误信息 */
        }
    }
    // 分页+标签获取日志
    static async getBlogByPageAndTag(req) {
        try {
            return R.ok(200, '获取日志成功', await blogService.getBlogByPageAndTag(req))
        } catch (error) {
            return R.err(
                500,
                '获取日志失败',
                String(error)
            ) /* 注：Error 对象默认没有定义 toJSON() 方法，所以 JSON.stringify(error) 会返回 {}（空对象），导致无法看到错误信息。此处使用String(错误对象)来查看错误信息 */
        }
    }

    // 获取全部日志
    static async getAllBlog(req) {
        try {
            return R.ok(200, '获取日志成功', await blogService.getAllBlog(req))
        } catch (error) {
            return R.err(
                500,
                '获取全部的日志失败',
                String(error)
            )
            
        }
        
    }

    // 获取日志表的全部标签
    static async getAllTag() {
        return R.ok(200, '获取日志表的全部标签成功', await blogService.getAllTag())
    }
}