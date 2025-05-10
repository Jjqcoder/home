<template>
    <div>
        <DataDisplay title="当前版本信息" subtitle="" :content="htmlContent" />
    </div>
</template>

<script setup>
import DataDisplay from '../../components/DataDisplay/index.vue'
import {ref, watch} from 'vue'
import {get} from './../../utils/api/index.js'

// 获取前端版本信息
import {version as clientVersion} from './../../../package.json'
let serverVersion = ref(null)

let getServerVersion = async () => {
    serverVersion.value = await get('/version/getVersion')
    // Proxy(Object) {data: '1.0.1', status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
    serverVersion.value = serverVersion.value.data
    // console.log(serverVersion.value) // 1.0.1
}

getServerVersion()

// 初始化需要渲染的内容
let htmlContent = ref(`
    <p>前端版本：${clientVersion}</p>
    <p>后端版本：${serverVersion.value}</p>
`)

// 使用watch 确保渲染的是最新的版本信息（避免网络延迟 导致渲染错误）
watch(serverVersion, () => {
    htmlContent.value = `
        <p>前端版本：${clientVersion}</p>
        <p>后端版本：${serverVersion.value}</p>
    `
})
</script>

<style></style>
