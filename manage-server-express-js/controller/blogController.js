/**
 * 创建时间: 2025-05-26
 * 作者: jjq
 * 描述: blog控制层
 */

const service = require('../service/blogService')

module.exports = class BlogController {
    static async insertOne(req, res) {
        console.log('👻', req.body)

        res.send(await service.insertOne(req, res))
    }
}
