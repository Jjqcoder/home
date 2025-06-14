/**
 * 创建时间: 2025-06-14
 * 作者: jjq
 * 描述: 登录注册控制器
 */

module.exports = class LoginController {
    static async loginAndRegister(req, res) {
        console.log(req.body);
        console.log('收到请求');
    }
}