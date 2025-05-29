<template>
    <div>
        <!-- 标签选择组件开始 -->
        <div class="tag-selector-container">
            <h1>标签选择器示例</h1>
            <TagSelector :tags="allTags" v-model="selectedTagIds" />
            <p>已选择的标签：</p>
            <ul>
                <li v-for="tag in selectedTags" :key="tag.id">
                    {{ tag.name }}
                </li>
            </ul>
        </div>
        <!-- 标签选择组件结束 -->
        <!-- 渲染全部的文章列表开始 -->
        <FixedList class="my-blog" :pageSelectData="pageSelectData"></FixedList>
        <!-- 渲染全部的文章列表结束 -->
        <!-- 页码跳转开始 -->
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
        <!-- 页码跳转开始 -->
    </div>
</template>

<script lang="" setup>
import TagSelector from '../TagSelector/index.vue' /* 引入标签选择组件 */
import {ref, onMounted, computed, watch} from 'vue'
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
const allBlogType = ref([]) /* 存储博客全部的Tag */

// 配合onMounted，页面加载完成后就开始获取数据的条数
onMounted(async () => {
    try {
        let res = await get(`/blog/getBlogByPage`, {
            current: currentPage.value,
            size: pageSize.value
        })
        console.log('res', res)
        
        /* 存全部的blog tag开始 */
        // 下方的代码临时获取全部的blog数据解决blog标签显示不全的问题
        // TODO 后续使用getAllBlog解决此问题
        let res2 = await get(`/blog/getBlogByPage`, {
            current: currentPage.value,
            size: 10000// 注：获取全部的博客数据 确保标签显示全
        })
        res2.data.data.records.forEach(item => {
            console.log('item.BLOG_TAGS', item.BLOG_TAGS)

            if (item.BLOG_TAGS && item.BLOG_TAGS.trim() !== '') {
                // 将标签字符串转换为数组
                const tagsArray = item.BLOG_TAGS.split('|').map(tag => tag.trim())
                // 合并到 allBlogType 中，去重
                allBlogType.value = [...new Set([...allBlogType.value, ...tagsArray])]
            }
        })
        console.log('遍历完毕', allBlogType.value)

        /* 存全部的blog tag结束 */

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
                message: `${JSON.stringify(res.data)}`,
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

        let res = await get(`/blog/getBlogByPageAndTag`, {
            current: currentPage.value,
            size: pageSize.value,
            tags: selectedTags.value.map(tag => tag.name).join('|')
        })

        pageSelectData.value = res.data.data.records
    } catch (error) {
        console.error('更换页码过程发生异常', error)
    }
}

/* ===================================标签选择相关的内容开始=================================== */
// 用于存储从后端获取的全部标签数据
const allTags = ref([])
// 将allBlogType中的标签转换为对象数组
allTags.value = allBlogType.value.map((tag, index) => ({
    id: index + 1, // 使用索引作为 ID
    name: tag
}))

// 用于存储已选择的标签 ID
const selectedTagIds = ref([]) // 初始时选中 JavaScript 和 CSS

// 添加 watch 来监听 selectedTagIds 的变化
watch(
    selectedTagIds,
    async () => {
        // console.log('当前选中的标签:', selectedTags.value.map(tag => tag.name).join(', '))

        /* 重新获取数据开始 */
        try {
            let res = await get(`/blog/getBlogByPageAndTag`, {
                current: currentPage.value,
                size: pageSize.value,
                tags: selectedTags.value.map(tag => tag.name).join('|')
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
                    message: `${JSON.stringify(res.data)}`,
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
        /* 重新获取数据结束 */
    },
    {deep: true}
)

// 计算已选择的标签
const selectedTags = computed(() => {
    return allTags.value.filter(tag => selectedTagIds.value.includes(tag.id))
})

// 监听 allBlogType 的变化，更新 allTags
watch(
    allBlogType,
    () => {
        allTags.value = allBlogType.value.map((tag, index) => ({
            id: index + 1, // 使用索引作为 ID
            name: tag
        }))
    },
    {immediate: true}
)
/* ===================================标签选择相关的内容结束=================================== */
</script>

<style scoped>
/* 标签选择器样式开始 */
.tag-selector-container {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
/* 标签选择器样式结束 */
</style>
