'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 天气服务层
 */

const util = require('../utils/index.js')

const axios = require('axios')
module.exports = class WeatherService {
    static async getWeather(req, res) {
        try {
            const {city} = req.body

            // 首先获取adcode
            let adcode
            try {
                adcode = await util.xlsx.getCityCode(city)
            } catch (error) {
                throw error
            }

            if (!adcode) {
                throw '城市代码无效'
            }

            // 根据adcode获取天气信息
            const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&key=${require('../config/index').get('key')}`
            try {
                const weatherData = await axios.get(url)
                return weatherData.data.lives
            } catch (error) {
                throw error
            }
        } catch (error) {
            throw error
        }
    }
}
