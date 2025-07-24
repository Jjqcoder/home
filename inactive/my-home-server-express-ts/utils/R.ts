'use strict'

/**
 * 创建时间: 2025-05-10
 * 作者: jjq
 * 描述: 结果类
 */

class R {
    code: number;
    msg: string | null;
    data: any | null;

    constructor(code: number, msg: string | null = null, data: any | null = null) {
        this.code = code
        this.msg = msg
        this.data = data
    }

    static ok(code: number, msg: string | null, data: any | null): R {
        return new R(code, msg, data)
    }

    static err(code: number, msg: string | null, data: any | null): R {
        return new R(code, msg, data)
    }
}

export = R

// 使用示例：
// const R = require('./R');
// const result = R.ok(200, '操作成功', { 'name' : 'jjq' });