package com.jiang.config;

import com.jiang.interceptors.MyGlobalInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
public class MyWebMvcConfigurer implements WebMvcConfigurer {
    @Autowired
    private MyGlobalInterceptor myGlobalInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 添加拦截器，并指定要拦截的路径
        // 这里我们拦截所有的请求，所以使用"/**"
        registry.addInterceptor(myGlobalInterceptor).addPathPatterns("/**");
    }
}
