'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 天气控制层
 */

const Service = require('./../service/index.js')
const R = require('./../utils/R.js')

module.exports = class WeatherController {
    static async getWeather(req, res) {
        try {
            return res.send(R.ok(200, '查询天气信息成功', await Service.weatherService.getWeather(req, res)))
        } catch (error) {
            return res.send(R.err(500, `controller >>> weatherController.js >>> getWeather >>> 查询天气信息失败 >>> 【${error}】`, error))
        }
    }
}
