package com.jiang.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;
/**
* @author Jiangjianqing
* @date 2024/4/21 0:33
 * 创建过滤器，解决请求的编码问题
*/
@Configuration
public class WebConfig {
//    设置了字符编码为UTF-8，同时强制所有请求都使用这种编码。
    @Bean
    public FilterRegistrationBean<CharacterEncodingFilter> myCharacterEncodingFilter() {
        FilterRegistrationBean<CharacterEncodingFilter> registrationBean = new FilterRegistrationBean<>();
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        filter.setForceEncoding(true);
        registrationBean.setFilter(filter);
        registrationBean.addUrlPatterns("/*"); // 设置过滤器应用的URL模式
        return registrationBean;
    }
}
