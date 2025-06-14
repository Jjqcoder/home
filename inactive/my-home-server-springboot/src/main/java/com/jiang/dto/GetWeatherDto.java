package com.jiang.dto;

import lombok.Data;

/**
* @author Jiangjianqing
* @date 2024/4/19 22:49
 * 用于接收前端传递的天气查询信息
*/
@Data
public class GetWeatherDto {
    private String provinceOrAreaCode;// 省或地区编码
    private String cityCode;// 城市编码
}
