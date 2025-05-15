<template>
    <div>
        <p>
            当前在线人数: <span class="online">{{ onlineCount }}</span
            >✨
        </p>
    </div>
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue'

export default {
    setup() {
        const onlineCount = ref(0)
        let socket = null
        const MAX_RECONNECT_ATTEMPTS = 5 // 最大重连次数
        // let reconnectAttempts = 0 // 当前重连次数
        let RECONNECT_ATTEMPTS = 0 // 当前重连次数
        const RECONNECT_INTERVAL = 3000 // 重连间隔（毫秒）
        const PING_INTERVAL = 10000 // 心跳包间隔（毫秒）

        const connectWebSocket = () => {
            try {
                socket = new WebSocket(`${import.meta.env.VITE_IN_USE_WS_URL}/ws/onlineCount`)

                socket.onmessage = event => {
                    if (event.data === 'pong') {
                        // 服务器发来的心跳
                        RECONNECT_ATTEMPTS = 0 // 重置重连次数
                    } else if (event.data === 'ping') {
                        // 服务器发来的心跳请求，回复心跳
                        socket.send('pong')
                    } else {
                        onlineCount.value = parseInt(event.data)
                        console.log('服务器发来的在线人数', event.data)
                    }
                }

                socket.onclose = () => {
                    console.log('WebSocket connection closed')
                    reconnectWebSocket()
                }

                socket.onerror = () => {
                    console.error('WebSocket error occurred')
                    reconnectWebSocket()
                }

                // 定时向服务器发送心跳包
                setInterval(() => {
                    if (socket.readyState === WebSocket.OPEN) {
                        console.log('前端发送心跳包')
                        socket.send('ping')
                    }
                }, PING_INTERVAL)
            } catch (error) {
                console.error('获取在线人数失败', error)
                reconnectWebSocket()
            }
        }

        const reconnectWebSocket = () => {
            if (RECONNECT_ATTEMPTS < MAX_RECONNECT_ATTEMPTS) {
                RECONNECT_ATTEMPTS++
                console.log(`尝试第 ${RECONNECT_ATTEMPTS} 次重连...`)
                setTimeout(connectWebSocket, RECONNECT_INTERVAL)
            } else {
                console.error('达到最大重连次数，不再尝试重连')
            }
        }

        onMounted(() => {
            connectWebSocket()
        })

        onUnmounted(() => {
            try {
                if (socket) {
                    socket.close()
                }
            } catch (error) {
                console.error('关闭WebSocket连接失败', error)
            }
        })

        return {
            onlineCount
        }
    }
}
</script>

<style lang="less">
.online {
    color: rgb(76, 67, 7);
    font-weight: bold;
}
</style>
