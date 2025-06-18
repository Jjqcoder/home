<template>
    <div class="timeline-container">
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

const activities = [
    {
        content: '👋至今',
        type: 'primary',
        icon: MoreFilled
    },
    /* 迁移取得阶段性成功之后再打开 - 开始 */
    // {
    //     content: '✈️正式开始对「db-service」进行渐进式 TypeScript 迁移',
    //     timestamp: '🗓️2025-06-19',
    //     type: 'primary',
    //     hollow: true
    // },
    // {
    //     content: '🐼正式开始将「my-home-server-express-js」向「my-home-server-express-ts」进行渐进式 TypeScript 迁移',
    //     timestamp: '🗓️2025-06-19',
    //     type: 'primary',
    //     hollow: true
    // },
    // {
    //     content: '🎆正式开始将「my-home-client-vue-js」向「my-home-client-vue-ts」进行渐进式 TypeScript 迁移',
    //     timestamp: '🗓️2025-06-18',
    //     type: 'primary',
    //     hollow: true
    // },
    /* 迁移取得阶段性成功之后再打开 - 结束 */
    {
        content: '🍜初步完成Tag筛选Blog的功能',
        timestamp: '🗓️2025-05-29',
        type: 'primary',
        hollow: true
    },
    {
        content: '🎯项目首次以微服务架构部署',
        timestamp: '🗓️2025-05-26',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔤初步完成并上线「学英语」模块',
        timestamp: '🗓️2025-05-17',
        type: 'primary',
        hollow: true
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
</script>

<style scoped>
.timeline-container {
    /* 时间线居中显示开始 */
    display: flex;
    justify-content: center;
    /* 时间线居中显示结束 */
    /* 设置padding-top，防止时间线紧贴顶部开始 */
    padding-top: 20px;
    /* 设置padding-top，防止时间线紧贴顶部结束 */
}
</style>
