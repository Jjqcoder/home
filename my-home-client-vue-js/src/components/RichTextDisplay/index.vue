<template>
    <div v-html="editorContent"></div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
    blog: {
        type: String, // 或根据你的实际类型调整
        required: true
    }
})
console.log('子组件', props.blog)
const blogData = JSON.parse(props.blog)

// 模拟从数据库获取的富文本内容
const editorContent = ref(`
    <h2 style="text-align: center">${blogData.BLOG_TITLE}</h2>
    <p>【创建时间: ${blogData.BLOG_CREATE_TIME}】</p><p>【更新时间: ${blogData.BLOG_UPDATE_TIME}】</p>
    <div style="text-indent: 2em">${blogData.BLOG_CONTENT}</div>
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
