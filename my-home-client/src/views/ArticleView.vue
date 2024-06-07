<template>
  显示文章的具体信息
  {{ id }}
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.query.id;

// 现在开始请求指定id的文章
</script>

<style>
</style>