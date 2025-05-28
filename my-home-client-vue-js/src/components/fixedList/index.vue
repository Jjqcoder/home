<!-- 此组件用于渲染博客列表 -->
<template>
    <div class="blog-list-container" :style="lightEffect">
        <div class="blog-list-content">
            <el-table :data="pageSelectData" style="width: 100%" height="100%" class="blog-table">
                <!-- 注：不再显示日志标识。标识信息对用户是没用的，开发过程中需要的时候取用即可，不必显示 -->
                <!-- <el-table-column fixed prop="ID" label="日志标识" width="" /> -->
                <el-table-column prop="BLOG_TITLE" label="日志标题" width="" />
                <el-table-column prop="BLOG_CREATE_TIME" label="创建时间" width="" />
                <el-table-column prop="BLOG_UPDATE_TIME" label="更新时间" width="" />
                <el-table-column fixed="right" label="操作" width="">
                    <template v-slot="scope">
                        <el-button @click="row_click(scope.row)" size="small" class="view-button"> 查看 </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const myProps = defineProps({
    pageSelectData: {
        required: true
    }
})

const router = useRouter()
const mouseX = ref(0)
const mouseY = ref(0)

const row_click = row => {
    router.push({name: 'blogDetail', params: {row: JSON.stringify(row)}})
}
</script>

<style scoped>
.blog-list-container {
    border: 3px dashed #cccccc;
    border-radius: 3px;
    margin: 3px;
    padding: 3px;
}
</style>
