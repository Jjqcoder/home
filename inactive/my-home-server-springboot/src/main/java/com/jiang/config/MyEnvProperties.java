package com.jiang.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
* @author Jiangjianqing
* @date 2024/4/18 22:46
 * 配置类
*/
@Data
@Component
public class MyEnvProperties {
    // 高德获取天气所用的key
    @Value("${home.weather.key}")
    private String AMapWeatherKey;

}
