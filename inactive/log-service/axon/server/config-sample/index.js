'use strict'

module.exports = {
    /* axon 开始 */
    "host": "0.0.0.0",// 配置服务端监听的地址和端口
    "port": 3000,// 生产环境需要配置为服务器的IP地址
    /* axon 结束 */

    /* mongodb开始 */
    "uri": "mongodb://数据库用户名:数据库密码@IP地址:端口号",// MongoDB 连接字符串
    "dbName": "数据库名称" // 数据库名称
    /* mongodb结束 */
}