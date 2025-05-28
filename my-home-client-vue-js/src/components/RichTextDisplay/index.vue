<!-- 富文本展示组件，后续会将大部分的显示工作交给此组件 -->
<template>
    <div v-html="editorContent"></div>
</template>

<script setup>
import {ref} from 'vue'

/*
预期父组件传入的格式为：
{
    "DATA_TOBE_DISPLAY_TITLE": "标题字符串",
    "DATA_TOBE_DISPLAY_CREATE_TIME": "时间字符串",
    "DATA_TOBE_DISPLAY_UPDATE_TIME": "时间字符串",
    "DATA_TOBE_DISPLAY_CONTENT": "内容HTML字符串" 
}
*/

// 使用defineProps来定义父组件传入的props
const props = defineProps({
    DATA_TOBE_DISPLAY: {
        type: String,
        required: true
    }
})

const DATA_TOBE_DISPLAY = JSON.parse(props.DATA_TOBE_DISPLAY)

// 当传入的指定内容为空，则不显示指定的标签，以增强组件的通用性
const editorContent = ref(`
  ${DATA_TOBE_DISPLAY.TITLE ? `<h2 style="text-align: center">${DATA_TOBE_DISPLAY.TITLE}</h2>` : ''}
  ${DATA_TOBE_DISPLAY.CREATE_TIME ? `<p>【创建时间: ${DATA_TOBE_DISPLAY.CREATE_TIME}】</p>` : ''}
  ${DATA_TOBE_DISPLAY.UPDATE_TIME ? `<p>【更新时间: ${DATA_TOBE_DISPLAY.UPDATE_TIME}】</p>` : ''}
  ${DATA_TOBE_DISPLAY.CONTENT ? `<div style="text-indent: 2em">${DATA_TOBE_DISPLAY.CONTENT}</div>` : ''}
`)
</script>

<style scoped>
div {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>
