<template>
    <div>
        <p>
            Active Users Now: <span class="online">{{ onlineCount }}</span
            >✨
        </p>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { OnlineCount } from '../../lib' // Use encapsulated WebSocket operations

const onlineCount = ref(0)
let wsService = null

onMounted(() => {
  // Create WebSocket service instance
  wsService = new OnlineCount(
    `${import.meta.env.VITE_IN_USE_WS_URL}/ws/onlineCount`,
    data => {
      onlineCount.value = parseInt(data)
      console.log(`Backend → Frontend: Online users [${data}]` )
    },
    {
      maxReconnectAttempts: 5,
      reconnectInterval: 3000,
      pingInterval: 10000
    }
  )
})

onUnmounted(() => {
  // Close WebSocket connection on component unmount
  if (wsService) {
    wsService.close()
  }
})
</script>

<style lang="less">
.online {
    color: rgb(76, 67, 7);
    font-weight: bold;
}
</style>