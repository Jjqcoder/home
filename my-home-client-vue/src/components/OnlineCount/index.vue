<template>
  <div>
    <p>当前在线人数: <span class="online">{{ onlineCount }}</span>✨</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const onlineCount = ref(0);
    let socket = null;

    onMounted(() => {
      socket = new WebSocket(
        `ws://${import.meta.env.VITE_IN_USE_BASE_URL}/online-users`
      );

      socket.onmessage = (event) => {
        onlineCount.value = parseInt(event.data);
      };

      socket.onclose = () => {
        console.log('WebSocket connection closed');
      };
    });

    onUnmounted(() => {
      if (socket) {
        socket.close();
      }
    });

    return {
      onlineCount,
    };
  },
};
</script>

<style lang="less">
.online {
  color: rgb(76, 67, 7);
  font-weight: bold;
}
</style>