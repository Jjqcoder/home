package com.manageserverspringboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
* @author Jiangjianqing
* @date 2024/10/10 20:56
* @description 允许跨域 + 使拦截器生效
*/
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Autowired
    private MyGlobalInterceptor myGlobalInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 添加拦截器，并指定要拦截的路径
        // 此处拦截所有的请求，所以使用"/**"
//        registry.addInterceptor(myGlobalInterceptor).addPathPatterns("/**");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 添加映射路径
        registry.addMapping("/**")
                .allowedOrigins("*") // 允许任何来源访问
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许的请求方法
                .allowedHeaders("*") // 允许的请求头
                .maxAge(168000); // 预检请求的缓存时间（以秒为单位）
    }
}
