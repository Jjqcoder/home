<template>

  <div class="weather">
    <el-cascader size="large" :options="pcTextArr" v-model="selectedOptions">
    </el-cascader>

  </div>
  <div class="search">
    <!-- <el-button type="primary" plain>点击查询！</el-button> -->

  </div>

  <!-- 分割线 -->
  <el-divider />
  <!-- {{ MyWeatherData }} -->
  <div class="weatherData">
    <listCom :fatherDataToSon="MyWeatherData"></listCom>
  </div>
</template>

<script setup>
import { pcTextArr } from 'element-china-area-data';
import { ref, watch } from 'vue';
import axios from 'axios';
import listCom from './../list/index.vue';

// console.log('测试！！！！！', import.meta.env.VITE_PROD_BASE_URL);
// const prob_base_url = import.meta.env.VITE_PROD_BASE_URL;
const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL;

// 保存选择的城市信息
const selectedOptions = ref([]);

// 定义用于存储天气数据的变量,后续将实时渲染到子组件list中
let MyWeatherData = ref([]);

// 监听所选的内容
watch(selectedOptions, (newValue, oldValue) => {
  // console.log(newValue[0], newValue[1]);

  // 提前编码，解决乱码问题
  // const provinceCode = encodeURIComponent(newValue[0]) + '';
  // const cityCode = encodeURIComponent(newValue[1]) + '';

  // 请求后端接口，获取天气数据
  axios
    .get(`http://${in_use_base_url}:8080/weather`, {
      params: {
        province: newValue[0],
        city: newValue[1],
      },
    })
    .then((res) => {
      console.log(res.data);

      // 获取到编码之后，开始第二个请求！
      axios
        .get(`http://${in_use_base_url}:8080/weather/${res.data}`)
        .then((res) => {
          // console.log(res.data.lives[0]);
          // alert(JSON.stringify(res.data.lives[0]));
          // const weatherData = JSON.stringify(res.data.lives[0]);
          // console.log('res.data:', res.data.lives[0]);
          MyWeatherData.value.push(res.data.lives[0]);
        });
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

