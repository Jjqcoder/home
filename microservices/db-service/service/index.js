/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: service类各项目共用，在controller层做项目的区分即可
 */

const R = require('../R.js') // 引入响应工具类

module.exports = class service {
    static blogService = require('./blogService.js') // 日志服务
    static englishService = require('./englishService.js') // 英语学习服务
    static visitService = require('./visitService.js') // 访问记录服务
}
