'use strict';

/**
 * 创建时间: 2025-04-17
 * 作者: jjq
 * 描述: 中间件执行器（支持异步中间件，并支持错误处理）
 */

module.exports = function executeMiddlewares(middlewares, req, next, callback) {
    const execute = (index) => {
        if (index === middlewares.length) {
            next(); // 所有中间件执行完毕，调用下一步
            return;
        }

        // 确保将 callback 传递给每个中间件
        middlewares[index](req, (err) => {
            if (err) {
                // 如果中间件返回了错误，直接调用callback返回错误信息
                callback(err, { code: 5000, data: 'Middleware error' });
            } else {
                // 如果没有错误，继续执行下一个中间件
                execute(index + 1);
            }
        }, callback);
    };

    execute(0); // 执行第一个中间件
};