package com.jiang.controller;

import com.jiang.config.MyEnvProperties;
import com.jiang.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
* @author Jiangjianqing
* @date 2024/4/18 22:14
 * 基于高德的天气查询功能
*/
@RestController
public class WeatherController {
    @Autowired
    MyService myService;

    @GetMapping("/weather/{cityCode}")
    public Object getWeatherByCity(@PathVariable String cityCode) {

        return myService.getDataFromExternalService(cityCode, "53d29f89e746948e6e67559c22429e5b");

    }

}
