/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: 在线人数
 */

const onlineUsers = new Set() // 用于存储在线用户

module.exports = (ws, req) => {
    // console.log('客户端已连接')

    // 将当前客户端加入在线用户集合
    onlineUsers.add(ws)

    // 通知所有客户端当前在线人数
    updateOnlineCount()

    // 捕获断开事件
    ws.on('close', () => {
        // console.log('客户端已断开连接')
        // 从在线用户集合中移除当前客户端
        onlineUsers.delete(ws)
        // 通知所有客户端当前在线人数
        updateOnlineCount()
    })
}

// 更新在线人数并通知所有客户端
function updateOnlineCount() {
    const count = onlineUsers.size
    onlineUsers.forEach(user => {
        user.send(count.toString())
    })
}
