<template>
    <div>
        <RichTextDisplay :DATA_TOBE_DISPLAY="displayData" />
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import RichTextDisplay from '../../components/RichTextDisplay/index.vue'
import { version as clientVersion } from './../../../package.json'
import { get } from './../../utils/api/index.js'

const serverVersion = ref('获取中...')
const displayData = ref({
    CONTENT: ''
})

const getServerVersion = async () => {
    try {
        // my-home-server-express-js版本
        const res = await get('/version/getVersion')

        /* 获取db-service 版本开始 */
        const res2 = await get('/dbservice/getVersion')
        console.log('res2.data🍭', res2.data);
        
        /* 获取db service 版本结束 */

        if (res.data.code === 200) {
            serverVersion.value = res.data.data
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
            CONTENT: `
            <div style="text-align: center;">
                <div style="display: inline-block; font-family: Arial, sans-serif; background: #f5f5f5; padding: 12px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin: 0 auto;">
                    <div style="margin-bottom: 8px; display: flex; justify-content: space-between;">
                        <span style="font-weight: bold; color: #555;">前端版本：</span>
                        <span style="color: #2196F3; font-weight: 500;">${clientVer}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="font-weight: bold; color: #555;">后端版本：</span>
                        <span style="color: #4CAF50; font-weight: 500;">${serverVer}</span>
                    </div>
                </div>
            </div>`
        }
    },
    {immediate: true} // 立即执行一次
)

// 初始化获取版本信息
getServerVersion()
</script>
