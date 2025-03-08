package com.jiang.config;

/**
* @author Jiangjianqing
* @date 2025/3/8 23:53
* @description 创建一个 WebSocket 配置类，用于注册 WebSocket 端点。
*/

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new OnlineUserWebSocketHandler(), "/online-users")
                .setAllowedOrigins("*");
    }
}
