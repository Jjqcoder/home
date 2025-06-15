<!-- 富文本展示组件，后续会将大部分的显示工作交给此组件 -->
<template>
    <div v-html="editorContent"></div>
</template>

<script setup>
import {ref, watch} from 'vue'

const props = defineProps({
    DATA_TOBE_DISPLAY: {
        type: Object,
        required: true
    }
})

const editorContent = ref('内容正在加载中...') // 初始化编辑器内容

watch(
    () => props.DATA_TOBE_DISPLAY, // 监听传入的DATA_TOBE_DISPLAY属性
    newVal => {
        editorContent.value = `
        ${newVal.TITLE ? `<h2 style="text-align: center">${newVal.TITLE}</h2>` : ''}
        ${newVal.CREATE_TIME ? `<p>【创建时间: ${newVal.CREATE_TIME}】</p>` : ''}
        ${newVal.UPDATE_TIME ? `<p>【更新时间: ${newVal.UPDATE_TIME}】</p>` : ''}
        ${newVal.CONTENT ? `<div style="text-indent: 2em">${newVal.CONTENT}</div>` : ''}
    `
    },
    {immediate: true, deep: true}
)
</script>

<style scoped>
div {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>
