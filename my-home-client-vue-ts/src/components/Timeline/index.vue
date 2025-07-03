<template>
    <!-- the test of component of loading start -->
    <!-- <Loading/> -->
    <!-- the test of component of loading end -->
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
import Loading from '../Loading/index.vue' // Import custom loading component

const activities = [
    {
        content: '👋Up to now',
        type: 'primary',
        icon: MoreFilled
    },
    /* Postpone 'Timeline' component release.[start] */

    {
        content: '🧩Officially decided to migrate this project to English.',
        timestamp: '🗓️June 26, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: "🙀Project's first deployment using Docker Compose [previously used Dockerfile]",
        timestamp: '🗓️June 26, 2025',
        type: 'primary',
        hollow: true
    },

    /* Postpone 'Timeline' component release.[end] */

    /* Open after migration achieves phased success — start */

    {
        content: '✈️Officially begin gradual TypeScript migration for 「db-service」',
        timestamp: '🗓️June 19, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '🐼Officially begin gradual TypeScript migration from 「my-home-server-express-js」 to 「my-home-server-express-ts」',
        timestamp: '🗓️June 19, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '🎆Officially begin gradual TypeScript migration from 「my-home-client-vue-js」 to 「my-home-client-vue-ts」',
        timestamp: '🗓️June 18, 2025',
        type: 'primary',
        hollow: true
    },

    /* Open after migration achieves phased success — end */
    {
        content: '🍜Preliminary completion of tag-filtered blog functionality',
        timestamp: '🗓️May 29, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: "🎯Project's first deployment with microservices architecture",
        timestamp: '🗓️May 26, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔤Preliminary completion and launch of the 「Learn English」 module',
        timestamp: '🗓️May 17, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '🌒Introduce 「Dark Mode」',
        timestamp: '🗓️May 1, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '💞Introduce 「Microservices」',
        timestamp: '🗓️April 22, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔧Officially decided to refactor 「my-home-server-springboot」 into 「my-home-server-express-js」',
        timestamp: '🗓️April 11, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔐Website upgraded to 「HTTPS」',
        timestamp: '🗓️March 21, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '🔢Introduce 「Visitor Analytics」 feature',
        timestamp: '🗓️March 20, 2025',
        type: 'primary',
        hollow: true
    },
    {
        content: '⏱️Introduce 「Timeline」 feature',
        timestamp: '🗓️May 6, 2024',
        type: 'primary',
        hollow: true
    },
    {
        content: '✍️Completed 「Blog List」 feature',
        timestamp: '🗓️April 27, 2024',
        type: 'primary',
        hollow: true
    },
    {
        content: '🌤️Completed 「Weather Lookup」 feature',
        timestamp: '🗓️April 22, 2024',
        type: 'primary',
        hollow: true
    },
    {
        content: '🎈Project initialized with 「Vue 3 + Spring Boot」',
        timestamp: '🗓️April 11, 2024'
    }
]
</script>

<style scoped>
.timeline-container {
    /* Timeline centered display - start */
    display: flex;
    justify-content: center;
    /* Timeline centered display - end */
    /* Set padding-top to prevent timeline from touching the top edge - start */
    padding-top: 20px;
    /* Set padding-top to prevent timeline from touching the top edge - end */
}
</style>
