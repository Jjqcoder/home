<template>
    <div>
        <RichTextDisplay :DATA_TOBE_DISPLAY="displayData" />
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import RichTextDisplay from '../../components/RichTextDisplay/index.vue'
import { versionApi } from '../../lib/api/version.api.js'
import { version as my_home_client_vue_js_version } from './../../../package.json'

const my_home_server_express_js_version = ref('获取中...')
const db_service_version = ref('获取中...')
const displayData = ref({
    CONTENT: ''
})

const getServerVersion = async () => {
    try {
        // my-home-server-express-js版本
        const res = await versionApi.myHomeServerExpressJsVersion()

        /* 获取db-service 版本开始 */
        const res2 = await versionApi.dbserviceVersion()
        db_service_version.value = res2.data.data
        /* 获取db service 版本结束 */

        if (res.data.code === 200) {
            my_home_server_express_js_version.value = res.data.data
            ElMessage({
                message: res.data.msg,
                type: 'success'
            })
        } else {
            ElMessage({
                message: `${JSON.stringify(res.data)}`,
                type: 'error'
            })
        }
    } catch (error) {
        my_home_server_express_js_version.value = '后端版本获取失败'
        ElMessage({
            message: error.message || '获取版本信息失败',
            type: 'error'
        })
    }
}

// 使用watch来监听版本变化
watch(
    [() => my_home_client_vue_js_version, my_home_server_express_js_version, db_service_version], // 监听的属性
    ([my_home_client_vue_js_version, my_home_server_express_js_version, db_service_version]) => {
        displayData.value = {
            CONTENT: `
        <div style="padding: 12px; max-width: 100%;">
            <h1>版本信息</h1>
            <div style="margin-bottom: 12px;">
                <div style="font-weight: bold; color: #333; margin-bottom: 4px;">my_home_client_vue_js</div>
                <div style="color: #2196F3; font-size: 14px;">${my_home_client_vue_js_version}</div>
            </div>
            <div>
                <div style="font-weight: bold; color: #333; margin-bottom: 4px;">my_home_server_express_js</div>
                <div style="color: #4CAF50; font-size: 14px;">${my_home_server_express_js_version}</div>
            </div>
            <div>
                <div style="font-weight: bold; color: #333; margin-bottom: 4px;">db_service</div>
                <div style="color: #4CAF50; font-size: 14px;">${db_service_version}</div>
            </div>
        </div>
    `
        }
    },
    {immediate: true} // 立即执行一次
)

// 初始化获取版本信息
getServerVersion()
</script>
