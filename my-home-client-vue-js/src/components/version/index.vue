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
        const res = await get('/version/getVersion')

        serverVersion.value = res.data.data
        // Proxy(Object) {data: '1.0.1', status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
        // ================弹窗开始================
        if (res.data.code === 200) {
            ElMessage({
                message: `${res.data.msg}`,
                type: 'success' // success, warning, info, error
            })
        } else {
            ElMessage({
                message: `${res.data.msg}`,
                type: 'error' // success, warning, info, error
            })
        }
        // ================弹窗结束================
    } catch (error) {
        serverVersion.value = '后端版本获取失败'
        // ================弹窗开始================
        ElMessage({
            message: `${error}`,
            type: 'error' // success, warning, info, error
        })
        // ================弹窗结束================
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

<style></style>
