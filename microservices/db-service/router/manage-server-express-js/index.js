/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 路由配置，使用map维护路由
 */

const controller = require('../../controller/manage-server-express-js/index.js')

// 涉及数据库的操作均在此服务完成
const router = {
    '/getBlogByPage': controller.getBlogByPage, // 分页获取日志
    '/getSentenceRandomOne': controller.getSentenceRandomOne, // 随机获取一个英语句子
    '/getAllVisit': controller.getAllVisit, // 获取所有访问记录
    '/getVisitByLimit': controller.getVisitByLimit // 获取近期访问记录

    // 可以继续添加更多方法
}

module.exports = router
