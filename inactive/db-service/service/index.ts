export { }; // 让 TypeScript 把该文件当作模块
/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: service 层
 */

const R = require('../lib/R') // 引入响应工具类

module.exports = class service {
    /* 服务层挂载开始 */
    static blogService = require('./blogService') // 日志服务
    static englishService = require('./englishService') // 英语学习服务
    static visitService = require('./visitService') // 访问记录服务
    static dbserviceVersionService = require('./dbserviceVersionService') // 版本服务
    /* 服务层挂载开始 */
}
