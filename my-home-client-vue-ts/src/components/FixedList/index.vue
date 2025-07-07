<!-- Blog List -->
<template>
    <div class="blog-list-container">
        <el-table :data="pageSelectData" style="width: 100%" height="100%">
            <el-table-column prop="BLOG_TITLE" label="Blog Title" />
            <el-table-column prop="BLOG_CREATE_TIME" label="Creation Time" />
            <el-table-column prop="BLOG_UPDATE_TIME" label="Update Time" />
            <el-table-column prop="BLOG_TAGS" label="Tags">
                <template v-slot="scope">
                    <!-- Check if BLOG_TAGS is not empty -->
                    <div v-if="scope.row.BLOG_TAGS && scope.row.BLOG_TAGS.trim() !== ''" style="display: flex; flex-wrap: wrap; gap: 4px">
                        <div v-for="tag in scope.row.BLOG_TAGS.split('|')" :key="tag" class="tag-badge">
                            {{ tag.trim() }}
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Actions" width="100" fixed="right">
                <template v-slot="scope">
                    <el-button @click="viewBlog(scope.row)" size="small">View</el-button>
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

// View blog
const viewBlog = row => {
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