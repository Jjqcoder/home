<!-- 本组件专门展示数据 -->
<template>
    <div class="data-display-container" :style="lightEffect">
        <div class="data-display-content">
            <div class="center-text">
                <h1>{{ title }}</h1>
                <span>{{ subtitle }}</span>
            </div>
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

// 背景渐变效果
const mouseX = ref(0)
const mouseY = ref(0)

const updateMousePosition = event => {
    mouseX.value = event.clientX
    mouseY.value = event.clientY
}

const lightEffect = {
    background: `radial-gradient(circle at ${(mouseX.value / window.innerWidth) * 100}% ${
        (mouseY.value / window.innerHeight) * 100
    }%, #ffecd2, #fcb69f)`
}

window.addEventListener('mousemove', updateMousePosition)

// 定义 props
const props = defineProps({
    title: {
        type: String,
        default: '默认标题'
    },
    subtitle: {
        type: String,
        default: '默认副标题'
    },
    content: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang="less">
.data-display-container {
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;
}

.data-display-content {
    max-width: 600px;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.data-display-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.center-text {
    text-align: center;
    margin-bottom: 20px;
}

.center-text h1 {
    font-size: 3rem;
    margin: 0;
}

.center-text span {
    font-size: 1.2rem;
    color: #666;
    display: block;
    margin-top: 5px;
}
</style>

<!-- 
使用方式如下
<template>
  <div>
    <DataDisplay
      title="我的数据展示"
      subtitle="最后更新时间：2025年5月10日"
      :content="htmlContent"
    />
  </div>
</template>

<script setup>
import DataDisplay from './DataDisplay.vue';

const htmlContent = `
  <p>这是一段从外部传入的 HTML 内容。</p>
  <ul>
    <li>项目1</li>
    <li>项目2</li>
  </ul>
`;
</script>
-->
