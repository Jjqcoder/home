package com.manageserverspringboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

// swagger ui界面
// url:http://localhost:8090/swagger-ui.html
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.manageserverspringboot.controller")) // 控制器所在的包
                .paths(PathSelectors.any())
                .build();
    }
    private ApiInfo apiInfo() {
        return new ApiInfo(
                "My API Title", // 标题
                "API to describe my application", // 描述
                "1.0.0", // 版本
                "Terms of service", // 服务条款URL
                new Contact("Your Name", "www.yourwebsite.com", "your.email@example.com"), // 联系人信息
                "License of API", // 许可
                "API license URL", // 许可URL
                Collections.emptyList() // 扩展信息
        );
    }
}
