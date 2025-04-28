'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 天气控制层
 */

const Service = require('./../service/index.js')
module.exports = class WeatherController {
    static async getWeather(req, res) {
        return Service.weatherService.getWeather(req, res)
    }
}
