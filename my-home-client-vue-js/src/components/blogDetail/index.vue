<template>
    <RichTextDisplay :DATA_TOBE_DISPLAY="DATA_TOBE_DISPLAY" />
</template>

<script setup>
import RichTextDisplay from '../RichTextDisplay/index.vue'
// 获取日志信息
import {useRoute} from 'vue-router'

const route = useRoute()

// 获取动态参数 row
let DATA_TOBE_DISPLAY = JSON.parse(route.params.row)
console.log(`DATA_TOBE_DISPLAY`, DATA_TOBE_DISPLAY)
// 替换掉键名中的 'BLOG_' 前缀
DATA_TOBE_DISPLAY = Object.fromEntries(
    Object.entries(DATA_TOBE_DISPLAY).map(([key, value]) => {
        return [key.replace('BLOG_', ''), value]
    })
)
</script>

<style lang="scss" scoped></style>
