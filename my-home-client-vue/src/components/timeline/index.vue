<template>
    <div class="timeline-container" :style="lightEffect">
        <div class="timeline-content">
            <el-timeline class="timeline">
                <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    :hollow="activity.hollow"
                    :timestamp="activity.timestamp"
                >
                    {{ activity.content }}
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {MoreFilled} from '@element-plus/icons-vue'
import {ref} from 'vue'

const activities = [
    {
        content: '👋至今',
        type: 'primary',
        icon: MoreFilled
    },
    {
        content: '🌒引入「暗色模式」',
        timestamp: '🗓️2025-05-01',
        type: 'primary',
        hollow: true
    },
    {
        content: '💞引入「微服务」',
        timestamp: '🗓️2025-04-22',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔧正式决定使用「my-home-server-express-js」重构「my-home-server-springboot」',
        timestamp: '🗓️2025-04-11',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔐网站升级为「https」',
        timestamp: '🗓️2025-03-21',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔢引入「访客统计」功能',
        timestamp: '🗓️2025-03-20',
        type: 'primary',
        hollow: true
    },
    {
        content: '⏱️引入「时间线」功能',
        timestamp: '🗓️2024-05-06',
        type: 'primary',
        hollow: true
    },
    {
        content: '✍️完成「日志列表」功能',
        timestamp: '🗓️2024-04-27',
        type: 'primary',
        hollow: true
    },
    {
        content: '🌤️完成「天气查询」功能',
        timestamp: '🗓️2024-04-22',
        type: 'primary',
        hollow: true
    },
    {
        content: '🎈项目初始化「Vue3+SpringBoot」',
        timestamp: '🗓️2024-04-11'
    }
]

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
</script>

<style scoped>
.timeline-container {
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;
}

.timeline-content {
    max-width: 800px;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.timeline {
    margin: 0;
}

:deep(.el-timeline-item) {
    padding-bottom: 20px;
}

:deep(.el-timeline-item__node) {
    background-color: #fcb69f;
    border-color: #fcb69f;
}

:deep(.el-timeline-item__tail) {
    border-left: 2px solid #fcb69f;
}

:deep(.el-timeline-item__timestamp) {
    color: #666;
    font-size: 0.9rem;
}

:deep(.el-timeline-item__content) {
    font-size: 1.1rem;
    color: #333;
    transition: transform 0.3s ease, color 0.3s ease;
}

:deep(.el-timeline-item__content:hover) {
    color: #fcb69f;
    transform: translateX(5px);
}
</style>
