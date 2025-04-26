<template>
    <div class="weather">
        <span class="search">今日天气查询🔍</span><el-cascader size="large" :options="pcTextArr" v-model="selectedOptions"> </el-cascader>
    </div>
    <!-- <div class="search"> -->
    <!-- <el-button type="primary" plain>点击查询！</el-button> -->
    <!-- </div> -->

    <!-- 分割线 -->
    <el-divider />
    <!-- {{ MyWeatherData }} -->
    <div class="weatherData">
        <listCom :fatherDataToSon="MyWeatherData"></listCom>
    </div>

    <!-- 下面开始显示预报信息 -->
    <!-- <div class="forecst">
    <span class="search">未来天气查询🔍</span>
    <el-cascader size="large" :options="pcTextArr" v-model="selectedOptionsForecast">
    </el-cascader>
  </div> -->
</template>

<script setup>
import {pcTextArr} from 'element-china-area-data'
import {ref, watch} from 'vue'
import axios from 'axios'
import listCom from './../list/index.vue'
import {toRaw} from 'vue'

const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL

// 保存选择的城市信息
const selectedOptions = ref([]) // 当日
const selectedOptionsForecast = ref([]) // 预报

// 定义用于存储天气数据的变量,后续将实时渲染到子组件list中
let MyWeatherData = ref([])

// 监听所选的内容
watch(selectedOptions, async (newValue, oldValue) => {
    try {
        // console.log('开始查询天气信息' + newValue[1])

        // 请求后端接口，获取天气数据
        const response = await axios.post(`${in_use_base_url}/weather/getWeather`, {
            city: newValue[1]
        })

        // 获取到编码之后，开始第二个请求
        // const secondResponse = await axios.get(`${in_use_base_url}/weather/${response.data}`)
        // console.log('response' + JSON.stringify(toRaw(response).data[0]))

        MyWeatherData.value.push(toRaw(response).data[0])
    } catch (err) {
        console.log('查询天气出现错误！' + err)
    }
})

// 开始天气预报信息的查询。
</script>

<style>
.weather {
    display: flex;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
}
.search {
    display: flex;
    /* 1%代表父元素宽度的百分比 */
    margin-top: 1%;
    justify-content: center;
}

/* 放大镜 */
.search {
    font-size: 25px;
}

/* 天气预报 */
.forecst {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
}
</style>
