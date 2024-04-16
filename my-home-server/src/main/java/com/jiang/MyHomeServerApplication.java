package com.jiang;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//@MapperScan(basePackages = "com.jiang.mapper")
@SpringBootApplication
@MapperScan("com.jiang.mapper")
public class MyHomeServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyHomeServerApplication.class, args);
    }

}
