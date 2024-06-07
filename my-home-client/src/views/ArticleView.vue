<template>
  显示文章的具体信息
  <!-- {{ id }} -->
  {{ blogData }}
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const id = route.query.id;

// 现在开始请求指定id的文章
import axios from 'axios';
const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL;
const blogData = ref(null);

// watch(id, (newValue, oldValue) => {
// 获取指定 id 的内容
axios
  .get(`http://${in_use_base_url}:8080/blog/${id}`)
  .then((res) => {
    console.log(res.data);
    blogData.value = res.data;
  })
  .catch((err) => {
    console.log(err);
  });
// });
</script>

<style>
</style>