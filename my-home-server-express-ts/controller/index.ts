'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: controller 主类
 */

module.exports = class Controller {
    /* 控制器挂载开始 */
    static blogController = require('./blogController')
    static visitController = require('./visitController')
    static weatherController = require('./weatherController')
    static versionController = require('./versionController')
    static englishController = require('./englishController')
    static dbserviceVersionController = require('./dbserviceVersionController')
    /* 控制器挂载开始 */
}
