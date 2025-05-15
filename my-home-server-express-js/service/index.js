'use strict'

/**
 * 创建时间: 2025-04-21
 * 作者: jjq
 * 描述: service 主类
 */

module.exports = class Service {
    static blogService = require('./blogService.js')
    static visitService = require('./visitService.js')
    static weatherService = require('./weatherService.js')
    static englishService = require('./englishService.js')
    static onlineCountService = require('./onlineCount/index.js')
}
