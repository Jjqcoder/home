/**
 * 创建时间: 2025-05-26
 * 作者: jjq
 * 描述: 服务层入口
 */

// module.exports = class Service {
//     static blogService = require('./blogService.js')
// }

/* 导出开始 */
module.exports = {
    blogService: require('./blogService.js')
}
/* 导出结束 */