package com.jiang.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
public class WeatherData {
    // 用于Easy Excel的使用
    private String name;
    private String adcCode;
    private String cityCode;

}
