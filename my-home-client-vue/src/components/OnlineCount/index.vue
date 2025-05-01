<template>
    <div>
        <p>
            当前在线人数: <span class="online">{{ onlineCount }}</span
            >✨
        </p>
    </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue'

export default {
    setup() {
        const onlineCount = ref(0)
        let socket = null

        onMounted(() => {
            try {
                socket = new WebSocket(`${import.meta.env.VITE_IN_USE_WS_URL}/onlineCount`)

                socket.onmessage = event => {
                    console.log(event.data)

                    onlineCount.value = parseInt(event.data)
                }

                socket.onclose = () => {
                    console.log('WebSocket connection closed')
                }
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
