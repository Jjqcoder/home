'use strict'

/**
 * 创建时间: 2025-05-11
 * 作者: jjq
 * 描述: 获取服务器版本号
 */

module.exports = (function getVersion() {
    return require('../../package.json').version
})() // 注意 此处为立即执行
