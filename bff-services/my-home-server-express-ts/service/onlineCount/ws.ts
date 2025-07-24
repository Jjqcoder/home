export {}; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 基于ws的在线人数
 */

const onlineUsers = new Map() // 使用Map存储用户及其最后活跃时间

// 清理不活跃连接的时间间隔(毫秒)
const CLEANUP_INTERVAL = 1000 // 1秒
// 无响应断开时间(毫秒)
const INACTIVE_TIMEOUT = 10000 // 10秒

// 启动定时清理任务
setInterval(cleanupInactiveConnections, CLEANUP_INTERVAL)

module.exports = (ws, req) => {
    try {
        // 存储连接信息，包括最后活跃时间
        onlineUsers.set(ws, {
            lastActive: Date.now(),
            isAlive: true
        })

        // 设置心跳检测
        // ws.on('pong') 表示客户端已经响应了 ping 消息，我们更新用户的 lastActive 时间和 isAlive 状态。
        ws.on('pong', () => {
            const user = onlineUsers.get(ws)
            if (user) {
                user.lastActive = Date.now()
                user.isAlive = true
            }
        })

        // 通知所有客户端当前在线人数
        updateOnlineCount()

        // 捕获断开事件
        ws.on('close', () => {
            try {
                onlineUsers.delete(ws)
                updateOnlineCount()
            } catch (error) {
                console.error('客户端断开连接时发生错误:', error)
            }
        })

        // 接收到客户端发来的消息
        ws.on('message', data => {
            try {
                console.log('收到客户端消息:', data)

                const user = onlineUsers.get(ws)
                if (user) {
                    user.lastActive = Date.now()
                }

                if (data === 'ping') {
                    ws.send('pong')
                } else {
                    console.log('收到客户端消息:', data)
                }
            } catch (error) {
                console.error('处理客户端消息时发生错误:', error)
            }
        })

        // 错误处理
        ws.on('error', error => {
            console.error('WebSocket错误:', error)
            onlineUsers.delete(ws)
            updateOnlineCount()
        })

        setInterval(() => {
            console.log(`当前在线人数【${onlineUsers.size}】，当前时间: 【${new Date().toLocaleString()}】`)
        }, 10000) // 单位毫秒，答应当前在线人数
    } catch (error) {
        console.error('WebSocket连接处理时发生错误:', error)
    }
}

// 更新在线人数并通知所有客户端
function updateOnlineCount() {
    try {
        const count = onlineUsers.size
        onlineUsers.forEach((_, ws) => {
            try {
                if (ws.readyState === ws.OPEN) {
                    ws.send(count.toString())
                }
            } catch (error) {
                console.error('向客户端发送在线人数时发生错误:', error)
            }
        })
    } catch (error) {
        console.error('更新在线人数时发生错误:', error)
    }
}

// 清理不活跃的连接
function cleanupInactiveConnections() {
    const now = Date.now()
    onlineUsers.forEach((user, ws) => {
        if (now - user.lastActive > INACTIVE_TIMEOUT) {
            // 标记为不活跃
            user.isAlive = false

            // 发送ping检查连接是否真的断开
            ws.ping(() => {})

            // 如果已经标记为不活跃且没有响应，则断开连接
            setTimeout(() => {
                if (onlineUsers.get(ws)) {
                    const user = onlineUsers.get(ws)
                    if (!user.isAlive) {
                        ws.terminate()
                        onlineUsers.delete(ws)
                        updateOnlineCount()
                    }
                }
            }, 5000) // 等待5秒让pong响应
        }
    })
}
