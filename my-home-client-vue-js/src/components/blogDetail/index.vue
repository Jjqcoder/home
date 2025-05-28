<template>
    <RichTextDisplay :DATA_TOBE_DISPLAY="DATA_TOBE_DISPLAY" />
</template>

<script setup>
import RichTextDisplay from '../RichTextDisplay/index.vue'
// 获取日志信息
import {useRoute} from 'vue-router'

const route = useRoute()

// 获取动态参数 row
let DATA_TOBE_DISPLAY = route.params.row
/*
console.log(blog)
获取到的blog数据格式如下：
{
  "ID": 1,
  "BLOG_CREATE_TIME": "2025-03-09 14:45:17",
  "BLOG_UPDATE_TIME": "2025-03-09 15:01:38",
  "BLOG_TITLE": "xx",
  "BLOG_CONTENT": "xx",
  "IS_DELETE": "0"
}
*/
// console.log(`DATA_TOBE_DISPLAY` + typeof DATA_TOBE_DISPLAY) // string类型
let DATA_TOBE_DISPLAY_JSON = JSON.parse(DATA_TOBE_DISPLAY)
// 去除键的BLOG_前缀
DATA_TOBE_DISPLAY_JSON = Object.fromEntries(
    Object.entries(DATA_TOBE_DISPLAY_JSON).map(([key, value]) => {
        return [key.replace('BLOG_', ''), value]
    })
)
// 将处理后的数据转换为字符串，以便传递给子组件
DATA_TOBE_DISPLAY = JSON.stringify(DATA_TOBE_DISPLAY_JSON)
</script>

<style lang="scss" scoped></style>
