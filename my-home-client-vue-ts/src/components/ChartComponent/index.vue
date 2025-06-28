<template>
    <!-- 加载状态显示 -->
    <div v-if="loading" class="loading-text">加载中...</div>
    <!-- 图表容器 -->
    <div class="chart-container">
        <!-- Canvas图表元素，加载完成后显示 -->
        <canvas v-show="!loading" ref="chartRef"></canvas>
    </div>
</template>

<script setup>
// 引入Chart.js及其插件
import { Chart, registerables } from 'chart.js'
// 引入Vue相关API
import { onBeforeMount, ref, watch, onMounted, onBeforeUnmount } from 'vue'
// 引入自定义API工具
import { visitApi, messageNotify } from '../../lib'

/**
 * 获取访客统计信息
 * @returns {Promise<Object|null>} 访客数据或null
 */
const getVisitorStatistics = async () => {
    try {
        const res = await visitApi.someVisit()
        // 显示API返回的消息通知
        messageNotify(res)
        return res
    } catch (error) {
        console.error('Failed to fetch visitor statistics:', error)
        // 显示错误通知
        ElMessage({
            message: String(error),
            type: 'error'
        })
        return null
    }
}

// 定义响应式数据
const allVisitors = ref(null) // 原始访客数据
const labels = ref(null)      // 图表X轴标签
const data = ref(null)        // 图表Y轴数据
const loading = ref(true)     // 加载状态
const chartInitialized = ref(false) // 图表初始化状态
const myChart = ref(null)     // Chart实例引用

// 用于响应式调整图表尺寸的观察者
const resizeObserver = ref(null)

/**
 * 组件挂载前获取数据
 */
onBeforeMount(async () => {
    // 获取访客统计数据
    allVisitors.value = await getVisitorStatistics()
    if (allVisitors.value?.data) {
        // 使用Map统计每小时访问量
        const map = new Map()
        for (let obj of allVisitors.value.data) {
            // 提取小时作为key (格式: "YYYY-MM-DD HH点")
            const key = obj.CREATE_TIME.slice(0, 13).replace('T', ' ') + '点'
            // 统计每小时访问量
            map.set(key, (map.get(key) || 0) + 1)
        }
        // 设置图表标签和数据
        labels.value = Array.from(map.keys())
        data.value = Array.from(map.values())
    } else {
        console.warn('No visitor data available')
    }
})

// 注册Chart.js插件
Chart.register(...registerables)

// 获取Canvas元素的引用
const chartRef = ref(null)

/**
 * 初始化图表函数
 */
const initChart = () => {
    // 检查必要数据是否就绪
    if (!labels.value || !data.value || !chartRef.value) return
    
    // 获取Canvas上下文
    const ctx = chartRef.value.getContext('2d')
    
    // 如果已有图表实例，先销毁
    if (myChart.value) {
        myChart.value.destroy()
    }
    
    // 创建新的Chart实例
    myChart.value = new Chart(ctx, {
        type: 'line', // 折线图类型
        data: {
            labels: labels.value, // X轴标签
            datasets: [{
                label: '访问量', // 数据系列标签
                data: data.value, // Y轴数据
                borderColor: 'rgba(75, 192, 192, 1)', // 线条颜色
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // 填充颜色
                borderWidth: 2, // 线条宽度
                tension: 0.5, // 线条曲率
                pointRadius: window.innerWidth < 768 ? 3 : 4, // 移动端/PC端不同的点半径
                pointHoverRadius: 5 // 悬停时点半径
            }]
        },
        options: {
            responsive: true, // 响应式设计
            maintainAspectRatio: false, // 不保持固定宽高比
            plugins: {
                legend: {
                    position: 'top', // 图例位置
                    labels: {
                        font: {
                            size: window.innerWidth < 768 ? 12 : 14 // 移动端/PC端不同的字体大小
                        }
                    }
                },
                tooltip: {
                    mode: 'index', // 提示框模式
                    intersect: false, // 不要求精确相交
                    bodyFont: {
                        size: window.innerWidth < 768 ? 12 : 14 // 移动端/PC端不同的字体大小
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: window.innerWidth < 768 ? 45 : 0, // 移动端标签旋转45度
                        minRotation: window.innerWidth < 768 ? 45 : 0,
                        font: {
                            size: window.innerWidth < 768 ? 10 : 12 // 移动端/PC端不同的字体大小
                        }
                    },
                    grid: {
                        display: false // 不显示X轴网格线
                    }
                },
                y: {
                    beginAtZero: true, // Y轴从0开始
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 10 : 12 // 移动端/PC端不同的字体大小
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)' // 浅色网格线
                    }
                }
            },
            interaction: {
                mode: 'nearest', // 交互模式
                axis: 'x', // 交互轴
                intersect: false // 不要求精确相交
            }
        }
    })
    
    // 更新状态
    chartInitialized.value = true
    loading.value = false
}

/**
 * 设置图表尺寸响应式观察
 */
const setupResizeObserver = () => {
    if (chartRef.value?.parentElement) {
        // 创建ResizeObserver监听容器尺寸变化
        resizeObserver.value = new ResizeObserver(() => {
            if (myChart.value) {
                // 图表尺寸调整
                myChart.value.resize()
            }
        })
        // 开始观察图表容器
        resizeObserver.value.observe(chartRef.value.parentElement)
    }
}

// 组件挂载后设置响应式观察
onMounted(() => {
    setupResizeObserver()
})

// 组件卸载前清理
onBeforeUnmount(() => {
    if (myChart.value) {
        // 销毁图表实例
        myChart.value.destroy()
    }
    if (resizeObserver.value) {
        // 断开观察者
        resizeObserver.value.disconnect()
    }
})

// 监听数据和标签变化，初始化图表
watch([labels, data], () => {
    initChart()
})
</script>

<style scoped>
/* 加载中文字样式 */
.loading-text {
    text-align: center;
    padding: 20px;
    font-size: 16px;
    color: #666;
}

/* 图表容器样式 */
.chart-container {
    position: relative;
    width: 100%;
    height: 400px; /* PC端默认高度 */
}

/* 移动端样式调整 */
@media (max-width: 768px) {
    .chart-container {
        height: 300px; /* 移动端高度 */
    }
}

/* Canvas元素样式 */
canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
}
</style>