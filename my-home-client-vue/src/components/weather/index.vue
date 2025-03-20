<template>
  <div class="weather-container" :style="lightEffect">
    <div class="weather-content">
      <!-- 今日天气查询 -->
      <div class="weather">
        <span class="search">今日天气查询🔍</span>
        <el-cascader size="large" :options="pcTextArr" v-model="selectedOptions"
          class="city-selector" />
      </div>

      <!-- 分割线 -->
      <el-divider class="divider" />

      <!-- 天气数据显示 -->
      <div class="weatherData">
        <listCom :fatherDataToSon="MyWeatherData" />
      </div>

      <!-- 下面开始显示预报信息 -->
      <!-- <div class="forecst">
        <span class="search">未来天气查询🔍</span>
        <el-cascader size="large" :options="pcTextArr" v-model="selectedOptionsForecast" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { pcTextArr } from 'element-china-area-data';
import { ref, watch } from 'vue';
import axios from 'axios';
import listCom from './../list/index.vue';

const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL;

// 保存选择的城市信息
const selectedOptions = ref([]); // 当日
const selectedOptionsForecast = ref([]); // 预报

// 定义用于存储天气数据的变量,后续将实时渲染到子组件list中
let MyWeatherData = ref([]);

// 监听所选的内容
watch(selectedOptions, async (newValue, oldValue) => {
  try {
    // 请求后端接口，获取天气数据
    const response = await axios.get(`http://${in_use_base_url}/weather`, {
      params: {
        province: newValue[0],
        city: newValue[1],
      },
    });
    console.log('接收到的编码' + response.data);

    // 获取到编码之后，开始第二个请求
    const secondResponse = await axios.get(
      `http://${in_use_base_url}/weather/${response.data}`
    );
    MyWeatherData.value.push(secondResponse.data.lives[0]);
  } catch (err) {
    console.log('查询天气出现错误！' + err);
  }
});

// 背景渐变效果
const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

const lightEffect = {
  background: `radial-gradient(circle at ${
    (mouseX.value / window.innerWidth) * 100
  }% ${(mouseY.value / window.innerHeight) * 100}%, #ffecd2, #fcb69f)`,
};

window.addEventListener('mousemove', updateMousePosition);
</script>

<style scoped>
.weather-container {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
}

.weather-content {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.weather-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.weather {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.search {
  font-size: 25px;
  margin-right: 15px;
  color: #333;
}

.city-selector {
  width: 300px;
}

.divider {
  margin: 20px 0;
}

.weatherData {
  margin-top: 20px;
}

/* 未来天气查询部分 */
.forecst {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>