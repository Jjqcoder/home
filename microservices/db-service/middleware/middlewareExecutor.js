'use strict'

/**
 * 创建时间: 2025-05-18
 * 作者: jjq
 * 描述: 中间件执行器
 */

module.exports = class MiddlewareExecutor {
    // 支持初始化的时候直接传入中间件构成的数组
    constructor(middlewares = []) {
        this.middlewares = []
        this._validateAndAddMiddlewares(middlewares)
    }

    // 添加中间件
    use(middleware) {
        this._validateMiddleware(middleware)
        this.middlewares.push(middleware)
    }

    // 执行中间件
    async run(ctx) {
        let index = -1

        // 定义 next 函数
        const next = async () => {
            index++
            if (index >= this.middlewares.length) return
            await this.middlewares[index](ctx, next)
        }

        await next() // 从第一个中间件开始执行
    }

    // 校验中间件并添加
    _validateAndAddMiddlewares(middlewares) {
        if (!Array.isArray(middlewares)) {
            throw new Error('Middlewares must be an array')
        }
        for (const middleware of middlewares) {
            this._validateMiddleware(middleware)
            this.middlewares.push(middleware)
        }
    }

    // 校验单个中间件
    _validateMiddleware(middleware) {
        if (typeof middleware !== 'function') {
            throw new Error('Middleware must be a function')
        }
    }
}
