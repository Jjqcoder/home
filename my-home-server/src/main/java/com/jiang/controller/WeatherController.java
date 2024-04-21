package com.jiang.controller;

import com.jiang.config.MyEnvProperties;
import com.jiang.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* @author Jiangjianqing
* @date 2024/4/18 22:14
 * 基于高德的天气查询功能:
 * 1. 省/地区空，城市空，不允许
 * 2. 省/地区空，城市不空，允许
 * 3. 省/地区不空，城市空，允许
 * 4. 省/地区不空，城市不空，允许
*/
@RestController
public class WeatherController {
    // 首先需要对前端传递来的信息进行校验
    @Autowired
    MyService myService;

    // 传入市区id，返回对应的市区天气
    @GetMapping("/weather/{cityCode}")
    public Object getWeatherByCity(@PathVariable String cityCode) {

        return myService.getDataFromExternalService(cityCode);

    }

    // 传入省、市的中文名称，返回城市对应的城市信息
    @GetMapping("/weather")
    public String getWeatherByProvinceAndCity(@RequestParam("province") String province, @RequestParam("city") String city) {
        // 首先，需要将前端传递过来的省份、城市名称对应编码，然后调用服务层获取天气信息，再将信息返回到前端进行渲染
        // 使用城市、查询对应城市的天气信息

        return "你好";
    }

}
