<template>
    <div>
        <!-- 渲染全部的文章列表 -->
        <FixedList class="my-blog" :pageSelectData="pageSelectData"></FixedList>
        <!-- 页码跳转 -->
        <div class="demo-pagination-block">
            <div class="demonstration"></div>
            <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[5, 8, 10]"
                :small="small"
                :disabled="disabled"
                :background="background"
                :pager-count="4"
                layout="prev, pager, next"
                :total="totalDataCount"
                @current-change="handleCurrentChange"
            />
            <!-- @size-change="handleSizeChange" 暂不启用 -->
            <!--下方是完全的: layout="total, sizes, prev, pager, next, jumper" :total="totalDataCount" -->
        </div>
    </div>
</template>

<script lang="" setup>
import {ref, onMounted} from 'vue'
import FixedList from './../FixedList/index.vue' /* 引入fixedList组件 */
import {get} from './../../utils/api/index.js'
import {isMobileDevice} from '../../utils/index.js' /* 判断是手机端还是PC端 */
const totalDataCount = ref(100) /* 记录一共有多少条数据 */
const currentPage = ref(1)
let pageSize = isMobileDevice() ? ref(5) : ref(15) /* 根据设备类型设置每页显示的条数 */
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const pageSelectData = ref(null) /* 用于存储分页查询来的数据 */

// 配合onMounted，页面加载完成后就开始获取数据的条数
onMounted(async () => {
    try {
        let res = await get(`/blog/getBlogByPage`, {
            current: currentPage.value,
            size: pageSize.value
        })
        // 赋值博客的总条数
        totalDataCount.value = res.data.data.total
        // 赋值分页查询到的数据
        pageSelectData.value = res.data.data.records

        // 处理获取到的日期信息显示、换行
        // 2025-03-09T15:01:38.000Z ==> 2025-03-09 15:01:38
        if (pageSelectData.value) {
            pageSelectData.value.forEach(item => {
                item.BLOG_CREATE_TIME = item.BLOG_CREATE_TIME.replace('T', ' ').replace('.000Z', '')
                item.BLOG_UPDATE_TIME = item.BLOG_UPDATE_TIME.replace('T', ' ').replace('.000Z', '')
                // item.BLOG_CONTENT = item.BLOG_CONTENT.replace(/\n/g, '<br>') // 实现换行 注：目前使用富文本 不再需要手动处理换行
            })
        }

        // ================弹窗开始================
        // 消息提示
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
        // ================弹窗开始================
        ElMessage({
            message: `error: ${error}`,
            type: 'error' // success, warning, info, error
        })
        // ================弹窗结束================
    }
})

// size发生变化发生的回调(注：考虑到页面布局 目前暂未启用)
/*
const handleSizeChange = async val => {
    try {
        pageSize.value = val
        await handleCurrentChange()
    } catch (error) {
        console.error('更换页码过程发生异常')
    }
}
*/

// 页码发生改变触发的回调
const handleCurrentChange = async val => {
    try {
        // 当页码发生变化的时候，触发分页查询
        const res = await get(`/blog/getBlogByPage`, {
            current: currentPage.value,
            size: pageSize.value
        })

        pageSelectData.value = res.data.data.records
    } catch (error) {
        console.error('更换页码过程发生异常', error)
    }
}
</script>

<style scoped></style>
