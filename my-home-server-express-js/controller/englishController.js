'use strict'

/**
 * 创建时间: 2025-05-12
 * 作者: jjq
 * 描述: 英语学习控制层
 */

const R = require('../utils/R.js')

const service = require('../service/index.js')

module.exports = class EnglishController {
    // 获取版本号
    static async getSentenceRandomOne(req, res) {
        try {
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    default:
                        return res.send(R.err(400, '请求参数错误', `入参【${key}】不合法`))
                }
            }
            /* 字段校验结束 */
            return res.send(R.ok(200, '获取英语句子成功', await service.englishService.getSentenceRandomOne()))
        } catch (error) {
            return res.send(
                R.err(500, `controller >>> englishController.js >>> getSentenceRandomOne >>> 随机获取一条英语句子失败 >>> 【${error}】`, error)
            )
        }
    }
}
