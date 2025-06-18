<template>
    <div>
        <RichTextDisplay :DATA_TOBE_DISPLAY="displayData" />
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import RichTextDisplay from '../../components/RichTextDisplay/index.vue'
import { versionApi, messageNotify } from '../../lib'
// import { version as my_home_client_vue_js_version } from './../../../package.json' 静态获取 watch 中需要使用回调方式进行监听 使用响应式之后可简化监听方式
import { version as pkgVersion } from './../../../package.json'

const my_home_client_vue_ts_version = ref(pkgVersion) // 变成响应式 方便后续的监听
const my_home_server_express_ts_version = ref('获取中...')
const db_service_version = ref('获取中...')
const displayData = ref({
    CONTENT: ''
})

const getServerVersion = async () => {
    try {
        /* 获取my-home-server-express-ts版本开始 */ 
        const res = await versionApi.myHomeServerExpressTsVersion()
        /* 获取my-home-server-express-ts版本结束 */ 

        /* 获取db-service 版本开始 */
        const res2 = await versionApi.dbserviceVersion()
        db_service_version.value = res2.data.data
        /* 获取db service 版本结束 */

        // 赋值
        my_home_server_express_ts_version.value = res.data.data
        
        // 弹窗
        messageNotify(res, res2)
    } catch (error) {
        my_home_server_express_ts_version.value = 'my-home-server-express-ts版本获取失败'
        db_service_version.value = 'db-service版本获取失败'
        // 弹窗
        ElMessage({
            message: String(error),
            type: 'error'
        })
    }
}

// 使用watch来监听版本变化
watch(
    [my_home_client_vue_ts_version, my_home_server_express_ts_version, db_service_version], // 监听的属性
    ([my_home_client_vue_ts_version, my_home_server_express_ts_version, db_service_version]) => {
        displayData.value = {
            CONTENT: `
        <div style="padding: 12px; max-width: 100%;">
            <h1>版本信息</h1>
            <div style="margin-bottom: 12px;">
                <div style="font-weight: bold; color: #333; margin-bottom: 4px;">my_home_client_vue_ts</div>
                <div style="color: #2196F3; font-size: 14px;">${my_home_client_vue_ts_version}</div>
            </div>
            <div>
                <div style="font-weight: bold; color: #333; margin-bottom: 4px;">my_home_server_express_ts</div>
                <div style="color: #4CAF50; font-size: 14px;">${my_home_server_express_ts_version}</div>
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
