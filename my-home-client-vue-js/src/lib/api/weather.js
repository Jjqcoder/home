/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 天气api模块
 */

import { post } from './http.js';

export const weatherApi = {
    getWeather: async (city) => {
        return await post(
            `/weather/getWeather`,
            {city}
            )
    }
}