export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 结果类
 */

class R {
    constructor(public code: number, public msg: string | null = null, public data: any = null) {
        this.code = code
        this.msg = msg
        this.data = data
    }

    static ok(code: number, msg: string | null, data: any): R {
        return new R(code, msg, data)
    }

    static err(code: number, msg: string | null, data: any): R {
        return new R(code, msg, data)
    }
}

module.exports = R
