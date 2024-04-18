package com.jiang.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MyService {
    private final RestTemplate restTemplate;

    @Autowired
    public MyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getDataFromExternalService(String cityCode, String key) {
        String url = "https://restapi.amap.com/v3/weather/weatherInfo?city="+cityCode+"&key="+key+"";
//        System.out.println("key"+key);
        return restTemplate.getForObject(url, String.class);
    }
}
