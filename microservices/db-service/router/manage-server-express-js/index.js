/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const controller = require('../../controller/manage-server-express-js/index.js')
const R = require('../../R.js')

// 涉及数据库的操作均在此服务完成
const router = {
    '/getBlogByPage': [
        async req => {
            console.log('前置中间件执行了,入参为' + JSON.stringify(req)) // 此中间件如果返回了数据，则后续的中间件不再执行。如果没有返回数据，则会继续执行后续的中间件
        },
        // async () => {
        //     return R.err(400, '参数错误', null) // 直接返回数据，后续的中间件不再执行
        // },
        controller.getBlogByPage, // 返回数据
        async req => {
            console.log('后置中间件执行了,入参为' + JSON.stringify(req)) // 因为业务代码返回了数据，所以此中间件不会执行
        }
    ], // 分页获取日志
    '/getSentenceRandomOne': controller.getSentenceRandomOne, // 随机获取一个英语句子
    '/getAllVisit': controller.getAllVisit, // 获取所有访问记录
    '/getVisitByLimit': controller.getVisitByLimit // 获取近期访问记录

    // 可以继续添加更多方法
}

module.exports = router
