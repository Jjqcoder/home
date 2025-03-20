package com.jiang.service;

import com.jiang.config.MyEnvProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MyService {
    private final RestTemplate restTemplate;
    private final MyEnvProperties myEnvProperties;

    @Autowired
    public MyService(RestTemplate restTemplate, MyEnvProperties myEnvProperties) {
        this.restTemplate = restTemplate;
        this.myEnvProperties = myEnvProperties;
    }

    public String getDataFromExternalService(String cityCode) {
        String url = "https://restapi.amap.com/v3/weather/weatherInfo?city="+cityCode+"&key="+myEnvProperties.getAMapWeatherKey();
//        System.out.println(url);
        return restTemplate.getForObject(url, String.class);
    }
}
