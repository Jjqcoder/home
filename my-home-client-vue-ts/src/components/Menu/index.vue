<template>
    <div class="menu">
        <!-- 在线人数 -->
        <OnlineCount />
        <!-- 展示全部功能 -->
        <AllFunction />
    </div>
</template>

<script setup>
// 挂载在线人数组件
import OnlineCount from '../OnlineCount/index.vue'
import AllFunction from '../AllFunction/index.vue'
</script>

<style scoped lang="less">
.menu {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

/* 消除超链接的默认格式 */
a {
    // & 代表父选择器 也就是 a
    &, &:hover, &:active, &:focus {
        text-decoration: none;
        color: inherit;
    }
    
    &:hover {
        border-bottom: 3px solid rgba(171, 4, 4, 0.941);
    }
}
</style>
