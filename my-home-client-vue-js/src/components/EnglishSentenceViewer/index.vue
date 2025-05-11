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

<script>
export default {
    props: {
        sentence: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isImmersiveMode: false
        }
    },
    methods: {
        nextSentence() {
            this.$emit('next-sentence')
        },
        toggleImmersiveMode() {
            this.isImmersiveMode = !this.isImmersiveMode
            if (this.isImmersiveMode) {
                document.documentElement.classList.add('immersive-mode-active')
            } else {
                document.documentElement.classList.remove('immersive-mode-active')
            }
        }
    }
}
</script>

<style scoped>
.sentence-viewer {
    text-align: center;
    padding: 20px;
    transition: all 0.3s ease;
}

.sentence-content {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.6;
    color: #333; /* 默认字体颜色 */
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
    z-index: 2000; /* 确保高于Element Plus的组件 */
    background-color: #121212; /* 暗色背景 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.sentence-viewer.immersive-mode .sentence-content {
    font-size: 24px;
    max-width: 80%;
    margin-bottom: 40px;
    color: #fff; /* 沉浸式模式下字体颜色为白色 */
}

.sentence-viewer.immersive-mode .sentence-content p {
    background-color: rgba(255, 255, 255, 0.1); /* 半透明背景 */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.1); /* 暗色模式下的阴影 */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); /* 文字阴影，增强可读性 */
}

/* 全局样式，防止body滚动 */
:global(.immersive-mode-active) {
    overflow: hidden !important;
    background-color: #121212; /* 暗色背景 */
    color: #fff; /* 全局字体颜色为白色 */
}
</style>
