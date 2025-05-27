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

<style scoped>
.menu {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

/* 消除超链接的默认格式 */
/* 消除a标签的默认样式 */
/* 注意, a 是会匹配到 router-link 的 */
a {
    text-decoration: none; /* 移除下划线 */
    color: inherit; /* 继承父元素的文本颜色 */
}

a:hover,
a:active,
a:focus {
    text-decoration: none; /* 移除鼠标悬停、激活和聚焦时的下划线 */
}

/* 重新设置 hover 格式 */
a:hover {
    /* border: 1px solid black; */
    border-bottom: 3px solid rgba(171, 4, 4, 0.941);
}
</style>
