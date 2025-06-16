'use strict'

/**
 * 创建时间: 2025-06-15
 * 作者: jjq
 * 描述: 结果类
 */

class R {
    constructor(code, msg = null, data = null) {
        this.code = code
        this.msg = msg
        this.data = data
    }

    static ok(code, msg, data) {
        return new R(code, msg, data)
    }

    static err(code, msg, data) {
        return new R(code, msg, data)
    }
}

module.exports = R

// 使用示例：
// const R = require('./R.js');
// const result = R.ok(200, '操作成功', { 'name' : 'jjq' });
