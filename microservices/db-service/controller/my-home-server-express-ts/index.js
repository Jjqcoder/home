'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: controller 层
 */

module.exports = class controller {
    /* 控制器挂载开始 */
    static blogController = require('./blog')
    static englishController = require('./english')
    static visitController = require('./visit')
    static DbServiceVersionController = require('./dbServiceVersion')
    /* 控制器挂载结束 */
}
