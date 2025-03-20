<template>
  <div>我是访客统计组件</div>
  <ChartComponent />

</template>

<script setup>
// import { get } from '../../utils/api/index.js';
// // 获取全部的访客信息
// const getVisitorStatistics = async () => {
//   const res = await get('/visit');
//   return res;
// };
// console.log(await getVisitorStatistics());

import ChartComponent from './../ChartComponent/index.vue';
</script>
    
<style>
</style>