<!-- 本组件用于展示数据，后续预计使用富文本展示各数据，此组件暂不使用 -->
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

<style scoped lang="less"></style>

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
