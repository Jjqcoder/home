'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: controller 主类
 */

module.exports = class Controller {
    /* 控制器挂载开始 */
    static blogController = require('./blogController.js')
    static visitController = require('./visitController.js')
    static weatherController = require('./weatherController.js')
    static versionController = require('./versionController.js')
    static englishController = require('./englishController.js')
    static dbserviceVersionController = require('./dbserviceVersionController.js')
    /* 控制器挂载开始 */
}
