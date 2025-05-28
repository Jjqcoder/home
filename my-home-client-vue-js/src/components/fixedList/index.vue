<!-- 日志列表 -->
<template>
    <div class="blog-list-container">
        <el-table :data="pageSelectData" style="width: 100%" height="100%">
            <el-table-column prop="BLOG_TITLE" label="日志标题" />
            <el-table-column prop="BLOG_CREATE_TIME" label="创建时间" />
            <el-table-column prop="BLOG_UPDATE_TIME" label="更新时间" />
            <el-table-column prop="BLOG_TAGS" label="标签">
                <template v-slot="scope">
                    <!-- 判断 BLOG_TAGS 是否为空 -->
                    <div v-if="scope.row.BLOG_TAGS && scope.row.BLOG_TAGS.trim() !== ''" style="display: flex; flex-wrap: wrap; gap: 4px">
                        <div v-for="tag in scope.row.BLOG_TAGS.split('|')" :key="tag" class="tag-badge">
                            {{ tag.trim() }}
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
                <template v-slot="scope">
                    <el-button @click="row_click(scope.row)" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

const myProps = defineProps({
    pageSelectData: {
        required: true
    }
})

const router = useRouter()

const row_click = row => {
    router.push({name: 'blogDetail', params: {row: JSON.stringify(row)}})
}
</script>

<style scoped>
.blog-list-container {
    padding: 8px;
}

.tag-badge {
    padding: 2px 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    font-size: 12px;
}
</style>
