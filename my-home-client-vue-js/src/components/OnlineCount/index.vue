<template>
    <div>
        <p>
            当前在线人数: <span class="online">{{ onlineCount }}</span
            >✨
        </p>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { OnlineCount } from '../../lib'// 使用封装的ws操作

export default {
    setup() {
        const onlineCount = ref(0)
        let wsService = null

        onMounted(() => {
            // 创建 WebSocket 服务实例
            wsService = new OnlineCount(
                `${import.meta.env.VITE_IN_USE_WS_URL}/ws/onlineCount`,
                (data) => {
                    onlineCount.value = parseInt(data)
                    console.log('服务器发来的在线人数', data)
                },
                {
                    maxReconnectAttempts: 5,
                    reconnectInterval: 3000,
                    pingInterval: 10000
                }
            )
        })

        onUnmounted(() => {
            // 组件卸载时关闭 WebSocket 连接
            if (wsService) {
                wsService.close()
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