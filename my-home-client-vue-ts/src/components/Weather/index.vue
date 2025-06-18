<template>
    <!-- 标题开始 -->
    <div class="weather">
        <span class="search">今日天气查询🔍</span><el-cascader size="large" :options="pcTextArr" v-model="selectedOptions"> </el-cascader>
    </div>
    <!-- 标题结束 -->

    <!-- 分割线开始 -->
    <el-divider />
    <!-- 分割线结束 -->

    <!-- 存放天气查询结果信息的列表开始 -->
    <div class="weatherData">
        <ListCom :fatherDataToSon="MyWeatherData"></ListCom>
    </div>
    <!-- 存放天气查询结果信息的列表开始 -->


    <!-- 预报信息开始 -->
    <!-- <div class="forecst">
    <span class="search">未来天气查询🔍</span>
    <el-cascader size="large" :options="pcTextArr" v-model="selectedOptionsForecast">
    </el-cascader>
  </div> -->
    <!-- 预报信息结束 -->
</template>

<script setup>
import { pcTextArr } from 'element-china-area-data'
import { ref, toRaw, watch } from 'vue'
import { weatherApi } from '../../lib'
import ListCom from '../List/index.vue'

const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL

// 保存选择的城市信息
const selectedOptions = ref([]) // 当日
// const selectedOptionsForecast = ref([]) // 预报:目前未启用

// 定义用于存储天气数据的变量,后续将实时渲染到子组件list中
let MyWeatherData = ref([])

// 监听所选的内容
watch(selectedOptions, async (newValue, oldValue) => {
    try {
        // 获取天气数据
        const response = await weatherApi.getWeather(newValue[1])
        MyWeatherData.value.push(toRaw(response).data[0])
        // ================弹窗开始================
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
    font-size: 25px; // 放大镜
  }
}

.forecst {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
</style>
