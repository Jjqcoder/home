export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 天气控制层
 */

const Service = require('../service/index')
const R = require('../utils').R

module.exports = class WeatherController {
    static async getWeather(req, res) {
        try {
            /* 字段校验开始 */
            const reqObj = req.query
            for (const key in reqObj) {
                switch (key) {
                    case 'city':
                        if (!reqObj[key]) {
                            return res.send(R.err(400, '请求参数错误', '入参【city】不能为空'))
                        } else if (typeof reqObj[key] !== 'string') {
                            return res.send(R.err(400, '请求参数错误', '入参【city】必须为字符串'))
                        }
                        break
                    default:
                        return res.send(R.err(400, '请求参数错误', `入参【${key}】不合法`))
                }
            }
            /* 字段校验结束 */
            return res.send(R.ok(200, '查询天气信息成功', await Service.weatherService.getWeather(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> weatherController.js >>> getWeather >>> 查询天气信息失败 >>> 【${error}】`, error))
        }
    }
}
