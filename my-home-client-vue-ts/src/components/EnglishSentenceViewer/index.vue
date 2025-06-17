<template>
    <div :class="['sentence-viewer', {'immersive-mode': isImmersiveMode}]">
        <div class="sentence-content">
            <p>{{ sentence }}</p>
        </div>
        <div class="button-group">
            <el-button type="primary" @click="nextSentence">下一句</el-button>
            <el-button :type="isImmersiveMode ? 'danger' : 'primary'" @click="toggleImmersiveMode">
                {{ isImmersiveMode ? '退出沉浸式阅读' : '沉浸式阅读' }}
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  sentence: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['next-sentence'])

const isImmersiveMode = ref(false)

const nextSentence = () => {
  emit('next-sentence')
}

const toggleImmersiveMode = () => {
  isImmersiveMode.value = !isImmersiveMode.value
  if (isImmersiveMode.value) {
    document.documentElement.classList.add('immersive-mode-active')
  } else {
    document.documentElement.classList.remove('immersive-mode-active')
  }
}
</script>

<style scoped>

/* 
    优化点：
    
    1. 增加了 padding-top: env(safe-area-inset-top, 20px) 来适配iPhone等有刘海屏的设备

    2. 调整了沉浸式模式下的内边距和边距，确保内容不会被屏幕边缘切割

    3. 增加了最小字体大小(16px)以确保小屏幕上的可读性

    4. 调整了行高(1.8)和单词换行(word-break)以改善阅读体验

    5. 在小屏幕媒体查询中进一步优化了顶部间距

    6. 使用了 box-sizing: border-box 确保内边距不会导致布局问题
*/
.sentence-viewer {
    text-align: center;
    padding: 20px;
    transition: all 0.3s ease;
}

.sentence-content {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.6;
    color: #333;
    text-align: left;
    text-indent: 2em;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
}

/* 沉浸式模式样式 */
.sentence-viewer.immersive-mode {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0; /* 增加上下内边距 */
    overflow: auto;
    box-sizing: border-box; /* 确保内边距包含在高度内 */
}

.sentence-viewer.immersive-mode .sentence-content {
    font-size: clamp(16px, 5vw, 24px); /* 调整最小字体大小 */
    line-height: 1.8; /* 增加行高提高可读性 */
    max-width: 90%; /* 调整最大宽度 */
    margin: 20px 0; /* 调整边距 */
    color: #fff;
    width: 100%; /* 确保宽度适应 */
    padding: 0 5%; /* 水平内边距 */
    box-sizing: border-box;
}

.sentence-viewer.immersive-mode .sentence-content p {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 25px 20px; /* 增加上下内边距 */
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.1);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    margin: 0;
    word-break: break-word; /* 确保长单词换行 */
}

/* 针对小屏幕的额外调整 */
@media (max-width: 480px) {
    .sentence-viewer.immersive-mode {
        padding-top: env(safe-area-inset-top, 20px); /* 考虑iPhone的刘海屏 */
        justify-content: flex-start; /* 从顶部开始布局 */
    }
    
    .sentence-viewer.immersive-mode .sentence-content {
        margin-top: 20px;
        max-width: 95%;
    }
}

/* 全局样式，防止body滚动 */
:global(.immersive-mode-active) {
    overflow: hidden !important;
    background-color: #121212;
    color: #fff;
}
</style>