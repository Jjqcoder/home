<template>

  <div class="weather">
    <el-cascader size="large" :options="pcTextArr" v-model="selectedOptions">
    </el-cascader>

  </div>
  <div class="search">
    <el-button type="primary" plain>点击查询！</el-button>
  </div>
</template>

<script setup>
import { pcTextArr } from 'element-china-area-data';
import { ref, watch } from 'vue';
import axios from 'axios';

const selectedOptions = ref([]);

// 监听所选的内容
watch(selectedOptions, (newValue, oldValue) => {
  console.log(newValue[0], newValue[1]);
  // 请求后端接口，获取天气数据
  axios
    .get('http://127.0.0.1:8080/weather', {
      params: {
        provinceCode: newValue[0],
        cityCode: newValue[1],
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style>
.weather {
  display: flex;
  margin-top: 5%;
  justify-content: center;
}
.search {
  display: flex;
  /* 1%代表父元素宽度的百分比 */
  margin-top: 1%;
  justify-content: center;
}
</style>

