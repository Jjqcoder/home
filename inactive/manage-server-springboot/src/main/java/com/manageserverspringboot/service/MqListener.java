package com.manageserverspringboot.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

/**
* @author Jiangjianqing
* @date 2024/10/17 21:05
* @description 用于监听mq队列信息
*/

@Slf4j// 引入后可以直接使用log.info等等方法打印日志
@Component
public class MqListener {
    @RabbitListener(queues = "demo.queue")
    public void listenerQueue(String msg) {
        log.info("监听到信息！" + msg);
    }
}
