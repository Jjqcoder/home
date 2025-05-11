<template>
    <div>
        <h1 style="text-align: center">英语学习模块</h1>
        <EnglishSentenceViewer :sentence="currentSentence" @next-sentence="nextSentence" />
    </div>
</template>

<script setup>
import {ref} from 'vue'
import EnglishSentenceViewer from './../EnglishSentenceViewer/index.vue' // 英语句子展示组件

// 句子列表
const sentences = ref(['句子1', '句子2'])

// 当前句子的索引
const currentSentenceIndex = ref(0)

// 当前句子
const currentSentence = ref(sentences.value[currentSentenceIndex.value])

// 获取下一个句子
function nextSentence() {
    // 更新索引
    currentSentenceIndex.value = (currentSentenceIndex.value + 1) % sentences.value.length
    // 更新当前句子
    currentSentence.value = sentences.value[currentSentenceIndex.value]
}
</script>
