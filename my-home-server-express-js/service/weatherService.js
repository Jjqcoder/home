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
                console.log('获取城市代码失败:' + error)
            }

            if (!adcode) {
                console.log('无效的城市代码' + adcode)
            }

            // 根据adcode获取天气信息
            const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&key=${require('./../config/index.js').get('key')}`
            try {
                const weatherData = await axios.get(url)
                return weatherData.data.lives
            } catch (error) {
                console.log('获取天气信息失败:', error)
            }
        } catch (error) {}
    }
}
