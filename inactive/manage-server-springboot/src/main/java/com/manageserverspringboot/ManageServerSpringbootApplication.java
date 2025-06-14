package com.manageserverspringboot;

import cn.dev33.satoken.SaManager;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
@Slf4j(topic = "[主函数]")
@SpringBootApplication
public class ManageServerSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(ManageServerSpringbootApplication.class, args);
        log.info("启动成功，Sa-Token 配置如下：{}", SaManager.getConfig());
    }

}
