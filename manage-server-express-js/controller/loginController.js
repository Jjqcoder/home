/**
 * 创建时间: 2025-06-14
 * 作者: jjq
 * 描述: 登录注册控制器
 */

module.exports = class LoginController {
    static async loginAndRegister(req, res) {
        console.log(req.body);
        console.log('收到请求');

        req.body.username += '\u200B'
        console.log(req.body.username.length);
        
        if (require('../lib').utils.hasZeroWidthCheck(req.body.username)) {
            console.log('存在零宽字符');
        } else {
            console.log('不存在零宽字符');
        }
    }
}