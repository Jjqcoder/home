/**
 * 创建时间: 2025-06-10
 * 作者: jjq
 * 描述: Lib 入口
 */

// module.exports = class Lib {
//     /* 挂载开始 */
//     static prisma = require('./prisma')
//     /* 挂载结束 */
// }

/* 导出开始 */
module.exports = {
    prisma: require('./prisma')
}
/* 导出结束 */