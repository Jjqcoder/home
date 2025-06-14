/**
 * 创建时间: 2025-05-26
 * 作者: jjq
 * 描述: 控制层路口
 */

// module.exports = class Controller {
//     /* 挂载开始 */
//     static blogController = require('./blogController.js')
//     static loginController = require('./loginController.js')
//     /* 挂载结束 */
// }

/* 导出开始 */
module.exports = {
    blogController: require('./blogController.js'),
    loginController: require('./loginController.js')
}
/* 导出结束 */