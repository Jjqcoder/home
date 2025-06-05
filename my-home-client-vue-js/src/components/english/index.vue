<template>
    <div>
        <h1 style="text-align: center">英语学习模块</h1>
        <EnglishSentenceViewer :sentence="currentSentence" @next-sentence="nextSentence" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { englishApi } from '../../lib';
import EnglishSentenceViewer from './../EnglishSentenceViewer/index.vue'; // 英语句子展示组件
import {messageNotify} from '../../lib'

// 当前句子
const currentSentence = ref(null)

// 获取下一个句子
const nextSentence = async () => {
    try {
        // 获取一个句子
        const resRandomSentence = await englishApi.getSentenceRandomOne()

        // 句子赋值
        currentSentence.value = resRandomSentence.data.data.CONTENT

        // 弹窗
        messageNotify(resRandomSentence)
    } catch (error) {
        // 弹窗
        ElMessage({
            message: `error: ${error}`,
            type: 'error' // success, warning, info, error
        })
    }
}

// 页面挂载完之后执行一下获取句子函数
onMounted(async () => {
    await nextSentence() // 加载完页面就获取一个句子
})
</script>
