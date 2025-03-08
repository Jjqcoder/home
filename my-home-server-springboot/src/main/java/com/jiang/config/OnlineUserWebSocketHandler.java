package com.jiang.config;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;

/**
* @author Jiangjianqing
* @date 2025/3/8 23:53
* @description 创建一个 WebSocket 处理器类，用于处理连接、断开连接以及在线人数的统计。
*/
public class OnlineUserWebSocketHandler extends TextWebSocketHandler {

    // 确保各个实例共享一个 sessions map
    private static final ConcurrentHashMap<String, WebSocketSession> sessions = new ConcurrentHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.put(session.getId(), session);
        broadcastOnlineCount();
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session.getId());
        broadcastOnlineCount();
    }

    private void broadcastOnlineCount() throws IOException {
        int onlineCount = sessions.size();
        TextMessage message = new TextMessage(String.valueOf(onlineCount));
        for (WebSocketSession session : sessions.values()) {
            session.sendMessage(message);
        }
    }
}
