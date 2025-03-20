<template>
  <canvas ref="chartRef" style="width: 100%; height: 400px;"></canvas>
</template>

<script setup>
import { onMounted, ref, onBeforeMount, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
import { get } from '../../utils/api/index.js';

// 获取全部的访客信息
const getVisitorStatistics = async () => {
  try {
    const res = await get('/visit');
    return res;
  } catch (error) {
    console.error('Failed to fetch visitor statistics:', error);
    return null;
  }
};

// 定义全部的访客数据
const allVisitors = ref(null);
const labels = ref(null); // x轴标签
const data = ref(null); // 数据

// 首先获取数据！
onBeforeMount(async () => {
  allVisitors.value = await getVisitorStatistics();
  if (allVisitors.value && allVisitors.value.data) {
    const map = new Map();
    for (let obj of allVisitors.value.data) {
      const key = obj.createTime.slice(0, 13).replace('T', ' ') + '点';
      if (!map.has(key)) {
        map.set(key, 1);
      } else {
        map.set(key, map.get(key) + 1);
      }
    }
    labels.value = Array.from(map.keys());
    data.value = Array.from(map.values());
  } else {
    console.warn('No visitor data available');
  }
});

Chart.register(...registerables);

const chartRef = ref(null);

// 监控 labels 和 data 的变化，确保数据准备好后再渲染图表
watch([labels, data], ([newLabels, newData]) => {
  if (newLabels && newData && chartRef.value) {
    const ctx = chartRef.value.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line', // 图表类型
      data: {
        labels: newLabels, // X轴标签
        datasets: [
          {
            label: 'Visitors', // 数据集标签
            data: newData, // 数据
            borderColor: 'rgba(75, 192, 192, 1)', // 边框颜色
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // 填充颜色
          },
        ],
      },
      options: {
        responsive: true, // 自适应
        scales: {
          y: {
            beginAtZero: true, // Y轴从0开始
          },
        },
      },
    });
  }
});
</script>

<style scoped>
/* 样式可以根据需要调整 */
</style>