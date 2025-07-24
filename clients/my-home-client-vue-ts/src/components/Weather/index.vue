<template>
    <!-- title start -->
    <div class="weather">
        <span class="search">today's weather forecast</span><el-cascader size="large" :options="pcTextArr" v-model="selectedOptions"> </el-cascader>
    </div>
    <!-- title end -->

    <!-- divider start -->
    <el-divider />
    <!-- divider end -->

    <!-- weather query result list start -->
    <div class="weatherData">
        <ListCom :fatherDataToSon="MyWeatherData"></ListCom>
    </div>
    <!-- weather query result list end -->


    <!-- forecast information start -->
    <!-- <div class="forecst">
    <span class="search">future weather forecast🔍</span>
    <el-cascader size="large" :options="pcTextArr" v-model="selectedOptionsForecast">
    </el-cascader>
  </div> -->
    <!-- forecast information end -->
</template>

<script setup>
import { pcTextArr } from 'element-china-area-data'
import { ref, toRaw, watch } from 'vue'
import { weatherApi } from '../../lib'
import ListCom from '../List/index.vue'

const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL

// safe selected city information
const selectedOptions = ref([]) // today
// const selectedOptionsForecast = ref([]) // forecast:currently disable

// define variables to store weather data, which will be rendered in real-time to the child component 'list' later
let MyWeatherData = ref([])

// monitor selected content
watch(selectedOptions, async (newValue, oldValue) => {
    try {
        // fetch weather data
        const response = await weatherApi.getWeather(newValue[1])
        MyWeatherData.value.push(toRaw(response).data[0])
        // ================modal start================
        if (response.code === 200) {
            ElMessage({
                message: `${response.msg}`,
                type: 'success' // success, warning, info, error
            })
        } else {
            ElMessage({
                message: `${JSON.stringify(response)}`,
                type: 'error' // success, warning, info, error
            })
        }
        // ================modal end================
    } catch (err) {
        // ================modal start================
        ElMessage({
            message: `${err}`,
            type: 'error' // success, warning, info, error
        })
        // ================modal end================
    }
})
</script>

<style lang="less" scoped>
.weather {
  display: flex;
  margin-top: 5%;
  justify-content: center;
  align-items: center;

  // Nested search styles
  .search {
    display: flex;
    margin-top: 1%;
    justify-content: center;
    font-size: 25px; // magnifying glass
  }
}

.forecst {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
</style>
