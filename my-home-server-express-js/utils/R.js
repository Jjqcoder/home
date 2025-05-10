'use strict'
/**
 * 创建时间: 2025-05-10
 * 作者: jjq
 * 描述: 结果类
 */

class R {
    constructor(code, value = null, data = null) {
        this.code = code
        this.value = value
        this.data = data
    }

    static ok(code, value, data) {
        return new R(code, value, data)
    }

    static err(code, reason, data) {
        return new R(code, reason, data)
    }
}

module.exports = R

// 使用示例：
// const R = require('./R.js');
// const result = R.ok(200, '操作成功', { 'name' : 'jjq' });
