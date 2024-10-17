package com.manageserverspringboot.controller;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class RabbitmqTest {

    // 依赖注入
    @Autowired
    private RabbitTemplate rabbitTemplate;

//    url示例:http://localhost:8090/sentMsg?message=hello_mq
    @GetMapping("/sentMsg")
    public String sentMsg(@RequestParam String message) {
        String queueName = "demo.queue";
        rabbitTemplate.convertAndSend(queueName, message);
        return "测试";
    }
}
