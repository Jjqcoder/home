<template>
    <RichTextDisplay :blog="blog" />
</template>

<script setup>
import RichTextDisplay from '../RichTextDisplay/index.vue'
// 获取日志信息
import {useRoute} from 'vue-router'

const route = useRoute()

// 获取动态参数 row
const blog = route.params.row
/*
console.log(blog)
{"ID":1,"BLOG_CREATE_TIME":"2025-03-09 14:45:17","BLOG_UPDATE_TIME":"2025-03-09 15:01:38","BLOG_TITLE":"xx","BLOG_CONTENT":"xx","IS_DELETE":"0"}
*/
</script>

<style lang="scss" scoped></style>
