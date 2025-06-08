/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: english 控制层
 */

const R = require('../../lib/index.js').R
const englishService = require('../../service/index.js').englishService

module.exports = class EngineController{
    static async getSentenceRandomOne(req) {
        try {
            return R.ok(200, '获取句子成功', await englishService.getSentenceRandomOne(req))
        } catch (error) {
            return R.err(
                500,
                '获取句子失败',
                String(error)
            ) /* 注：Error 对象默认没有定义 toJSON() 方法，所以 JSON.stringify(error) 会返回 {}（空对象），导致无法看到错误信息。此处使用String(错误对象)来查看错误信息 */
        }
    }
}