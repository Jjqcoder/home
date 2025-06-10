/**
 * 创建时间: 2025-06-01
 * 作者: jjq
 * 描述: router 配置类
 */

module.exports = class RouterConfig {
    static blogRouterConfig = require('./blog')/* 博客路由配置 */
    static englishRouterConfig = require('./english')/* 英语路由配置 */
    static visitRouterConfig = require('./visit')/* 访客路由配置 */
    static dbServiceRouterConfig = require('./dbserviceVersion')/* dbService 路由配置 */
}
