'use strict'

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: controller 层
 */

const service = require('../../service/index.js')
const R = require('../../R.js')

module.exports = class controller {
    /* 控制器挂载开始 */
    static blogController = require('./blog.js')
    static englishController = require('./english.js')
    static visitController = require('./visit.js')
    /* 控制器挂载结束 */
}
