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

        onMounted(() => {
            try {
                socket = new WebSocket(`${import.meta.env.VITE_IN_USE_WS_URL}/onlineCount`)

                socket.onmessage = event => {
                    if (event.data === 'pong') {
                        // 服务器发来的心跳
                    } else {
                        onlineCount.value = parseInt(event.data)
                        console.log('服务器发来的在线人数', event.data)
                    }
                }

                socket.onclose = () => {
                    console.log('WebSocket connection closed')
                }

                // 定时向服务器发送心跳包
                setInterval(() => {
                    if (socket.readyState === WebSocket.OPEN) {
                        console.log('前端发送心跳包')

                        socket.send('ping')
                    }
                }, 1000)
            } catch (error) {
                console.error('获取在线人数失败')
            }
        })

        onUnmounted(() => {
            try {
                if (socket) {
                    socket.close()
                }
            } catch (error) {
                console.error('关闭WebSocket连接失败')
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
