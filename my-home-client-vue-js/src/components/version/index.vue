<template>
    <div>
        <DataDisplay title="当前版本信息" subtitle="" :content="htmlContent" />
    </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import DataDisplay from '../../components/DataDisplay/index.vue'
import {version as clientVersion} from './../../../package.json'
import {get} from './../../utils/api/index.js'

// 获取前端版本信息
let serverVersion = ref(null)

let getServerVersion = async () => {
    try {
        const data = await get('/version/getVersion')

        serverVersion.value = data.data
        // Proxy(Object) {data: '1.0.1', status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
        serverVersion.value = serverVersion.value.data
        // console.log(serverVersion.value) // 1.0.1
    } catch (error) {
        serverVersion.value = '后端版本获取失败'
    }
}

getServerVersion()

// 初始化需要渲染的内容
let htmlContent = ref(`
    <div class="version-info">
        <div class="version-item">
            <span class="label">前端版本：</span>
            <span class="value">${clientVersion}</span>
        </div>
        <div class="version-item">
            <span class="label">后端版本：</span>
            <span class="value">${serverVersion.value}</span>
        </div>
    </div>
`)

// 使用watch 确保渲染的是最新的版本信息（避免网络延迟 导致渲染错误）
watch(serverVersion, () => {
    htmlContent.value = `
        <div class="version-info">
            <div class="version-item">
                <span class="label">前端版本：</span>
                <span class="value">${clientVersion}</span>
            </div>
            <div class="version-item">
                <span class="label">后端版本：</span>
                <span class="value">${serverVersion.value}</span>
            </div>
        </div>
    `
})
</script>

<style>
.version-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 100vh; 使容器占满整个视口高度 */
    font-size: 1.5em; /* 字体变大 */
}

.version-item {
    margin: 10px 0; /* 上下外边距，使两个版本信息之间有间隔 */
}

.version-item .label {
    font-weight: bold; /* 标签加粗 */
}

.version-item .value {
    color: #555; /* 值的颜色稍浅 */
}
</style>
