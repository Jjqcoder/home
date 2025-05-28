<template>
    <div>
        <RichTextDisplay :DATA_TOBE_DISPLAY="displayData" />
    </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import {version as clientVersion} from './../../../package.json'
import {get} from './../../utils/api/index.js'
import RichTextDisplay from '../../components/RichTextDisplay/index.vue'
import {ElMessage} from 'element-plus'

const serverVersion = ref('获取中...')
const displayData = ref({
    CONTENT: ''
})

const getServerVersion = async () => {
    try {
        const res = await get('/version/getVersion')

        if (res.data.code === 200) {
            serverVersion.value = res.data.data
            ElMessage({
                message: res.data.msg,
                type: 'success'
            })
        } else {
            ElMessage({
                message: res.data.msg,
                type: 'error'
            })
        }
    } catch (error) {
        serverVersion.value = '后端版本获取失败'
        ElMessage({
            message: error.message || '获取版本信息失败',
            type: 'error'
        })
    }
}

// 使用watch来监听版本变化
watch(
    [() => clientVersion, serverVersion], // 监听的属性
    ([clientVer, serverVer]) => {
        displayData.value = {
            CONTENT: `<div class="version-info">
            <div class="version-item">
                <span class="label">前端版本：</span>
                <span class="value">${clientVer}</span>
            </div>
            <div class="version-item">
                <span class="label">后端版本：</span>
                <span class="value">${serverVer}</span>
            </div>
        </div>`
        }
    },
    {immediate: true} // 立即执行一次
)

// 初始化获取版本信息
getServerVersion()
</script>
