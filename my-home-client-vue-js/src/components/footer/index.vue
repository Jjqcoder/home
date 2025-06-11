<template>
    <div class="footer">
        <div class="footer-content">
            <span>👮备案号：<a href="https://beian.miit.gov.cn/#/Integrated/index">闽ICP备2023004666号</a></span>
            <span>Made on 🌏 by ❤️.</span>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    height: 100%;
    color: rgb(105, 92, 92);
    font-size: smaller;
    font-size: 10px;
    background-color: rgb(248, 234, 176);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(75, 61, 1);
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px; /* 增加两行之间的间距 */
}

/* 消除a标签的默认样式 */
a {
    text-decoration: none; /* 移除下划线 */
    color: inherit; /* 继承父元素的文本颜色 */
}

a:hover,
a:active,
a:focus {
    text-decoration: none; /* 移除鼠标悬停、激活和聚焦时的下划线 */
}
</style>