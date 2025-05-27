<template>
    <div class="weather">
        <span class="search">今日天气查询🔍</span><el-cascader size="large" :options="pcTextArr" v-model="selectedOptions"> </el-cascader>
    </div>

    <!-- 分割线 -->
    <el-divider />
    <div class="weatherData">
        <ListCom :fatherDataToSon="MyWeatherData"></ListCom>
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
import {ref, toRaw, watch} from 'vue'
import {post} from '../../utils/api/index.js'
import ListCom from './../list/index.vue'

const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL

// 保存选择的城市信息
const selectedOptions = ref([]) // 当日
// const selectedOptionsForecast = ref([]) // 预报:目前未启用

// 定义用于存储天气数据的变量,后续将实时渲染到子组件list中
let MyWeatherData = ref([])

// 监听所选的内容
watch(selectedOptions, async (newValue, oldValue) => {
    try {
        // 请求后端接口，获取天气数据
        const response = await post(`/weather/getWeather`, {
            city: newValue[1]
        })
        MyWeatherData.value.push(toRaw(response).data.data[0])
        // ================弹窗开始================
        if (response.data.code === 200) {
            ElMessage({
                message: `${response.data.msg}`,
                type: 'success' // success, warning, info, error
            })
        } else {
            ElMessage({
                message: `${response.data.msg}`,
                type: 'error' // success, warning, info, error
            })
        }
        // ================弹窗结束================
    } catch (err) {
        // ================弹窗开始================
        ElMessage({
            message: `${err}`,
            type: 'error' // success, warning, info, error
        })
        // ================弹窗结束================
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
