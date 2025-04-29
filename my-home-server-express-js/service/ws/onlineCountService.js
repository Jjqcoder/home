'use strict'

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 在线人数
 */

const onlineUsers = new Set() // 用于存储在线用户

module.exports = (ws, req) => {
    try {
        // 触发连接事件！将当前客户端加入在线用户集合
        onlineUsers.add(ws)

        // 通知所有客户端当前在线人数
        updateOnlineCount()

        // 捕获断开事件
        ws.on('close', () => {
            try {
                // 从在线用户集合中移除当前客户端
                onlineUsers.delete(ws)
                // 通知所有客户端当前在线人数
                updateOnlineCount()
            } catch (error) {
                console.error('客户端断开连接时发生错误:', error)
            }
        })
    } catch (error) {
        console.error('WebSocket连接处理时发生错误:', error)
    }
}

// 更新在线人数并通知所有客户端
function updateOnlineCount() {
    try {
        const count = onlineUsers.size
        onlineUsers.forEach(user => {
            try {
                user.send(count.toString())
            } catch (error) {
                console.error('向客户端发送在线人数时发生错误:', error)
            }
        })
    } catch (error) {
        console.error('更新在线人数时发生错误:', error)
    }
}
