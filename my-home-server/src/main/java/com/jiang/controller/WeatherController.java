package com.jiang.controller;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.event.AnalysisEventListener;
import com.alibaba.excel.read.builder.ExcelReaderBuilder;
import com.alibaba.excel.read.builder.ExcelReaderSheetBuilder;
import com.jiang.entity.WeatherData;
import com.jiang.service.MyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

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
@Slf4j // 引入日志
public class WeatherController {

    // 首先需要对前端传递来的信息进行校验
    @Autowired
    MyService myService;

    // 传入市区id，返回对应的市区天气
    // 如： http://120.27.159.194:8080/weather/110000
    @GetMapping("/weather/{cityCode}")
    public Object getWeatherByCity(@PathVariable String cityCode) {

        return myService.getDataFromExternalService(cityCode);

    }

    // 传入省、市的中文名称，返回城市对应的城市信息
    @GetMapping("/weather")
    public String getWeatherByProvinceAndCity(@RequestParam("province") String province, @RequestParam("city") String city) {
        // 引入日志
        log.info("hello logback");

        // 首先，需要将前端传递过来的省份、城市名称对应编码，然后调用服务层获取天气信息，再将信息返回到前端进行渲染
        // 使用城市、查询对应城市的天气信息

        // 预先定义城市编码
        final String[] adCode = {""};

        // 定义文件名(开发状态下有效)
        String fileName = this.getClass().getClassLoader().getResource("AMap_adcode_citycode.xlsx").getPath();
        // 下面这一种方法获取文件，在项目打包上线后是生效的
//        String fileName = this.getClass().getResourceAsStream("/AMap_adcode_citycode.xlsx").toString();
        // 开始读Excel
        // readWeatherBook是工作簿对象，后续需要获取工作表
        ExcelReaderBuilder readWeatherBook = EasyExcel.read(fileName, WeatherData.class, new AnalysisEventListener<WeatherData>(){
            @Override
            public void invoke(WeatherData weatherData, AnalysisContext analysisContext) {
                if (city.equals(weatherData.getName())) {
                    adCode[0] = weatherData.getAdcCode();
//                    System.out.println(adCode[0]);

                }
            }

            @Override
            public void doAfterAllAnalysed(AnalysisContext analysisContext) {

            }
        } );
        // 获取数据表！
        ExcelReaderSheetBuilder sheet = readWeatherBook.sheet();
        // 开始读取！
        sheet.doRead();
        // 读取完毕，成功获取到地区编码
//        System.out.println("外部获取！"+adCode[0]);
        // 返回adCode，由前端进行第二次请求——天气信息
        return adCode[0];

    }


}
