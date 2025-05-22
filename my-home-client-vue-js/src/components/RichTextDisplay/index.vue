<template>
    <div>
        <h1 style="text-align: center">富文本展示组件</h1>
        <div v-html="editorContent"></div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

// 模拟从数据库获取的富文本内容
const editorContent = ref(`
    <h2>标题</h2>
    <p>这是一个段落文本，<strong>加粗</strong>的文字，<em>斜体</em>的文字。</p>
    <ul>
      <li>列表项1</li>
      <li>列表项2</li>
      <li>列表项3</li>
    </ul>
    <img src="https://picsum.photos/200" alt="示例图片">
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
