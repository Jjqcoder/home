<template >
  <div class="wrap">
    <el-timeline class="timeline" style="max-width: 600px">
      <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
        :type="activity.type" :color="activity.color" :size="activity.size"
        :hollow="activity.hollow" :timestamp="activity.timestamp">
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue';

const activities = [
  // {
  //   content: 'Custom icon',
  //   timestamp: '2018-04-12 20:46',
  //   size: 'large',
  //   type: 'primary',
  //   icon: MoreFilled,
  // },
  // {
  //   content: 'Custom color',
  //   timestamp: '2018-04-03 20:46',
  //   color: '#0bbd87',
  // },
  // {
  //   content: 'Custom size',
  //   timestamp: '2018-04-03 20:46',
  //   size: 'large',
  // },
  // {
  //   content: 'Custom hollow',
  //   timestamp: '2018-04-03 20:46',
  //   type: 'primary',
  //   hollow: true,
  // },
  // {
  //   content: 'Default node',
  //   timestamp: '2018-04-03 20:46',
  // },

  {
    content: '👋至今',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: '📋Markdown形式显示日志内容',
    timestamp: '🗓️2024-06-09',
    type: 'primary',
    hollow: true,
  },
  {
    content: '🐋前端代码使用Docker进行管理',
    timestamp: '🗓️2024-06-10',
    type: 'primary',
    hollow: true,
  },
  {
    content: '⏱️引入时间线',
    timestamp: '🗓️2024-05-06',
    type: 'primary',
    hollow: true,
  },
  {
    content: '✍️完成博客分页查询',
    timestamp: '🗓️2024-04-27',
    type: 'primary',
    hollow: true,
  },
  {
    content: '🌤️完成天气查询功能',
    timestamp: '🗓️2024-04-22',
    type: 'primary',
    hollow: true,
  },
  {
    content: '🎈项目初始化',
    timestamp: '🗓️2024-04-11',
    // type: 'primary',
    // hollow: true,
  },
];
</script>

<style>
/* .timeline {
  margin-top: 5%;
  margin-left: 30%;
} */

.wrap {
  display: flex;
  justify-content: center;
  padding-top: 5%;
}
</style>
