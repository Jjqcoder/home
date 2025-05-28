<template>
    <div class="blog-list-container" :style="lightEffect">
        <div class="blog-list-content">
            <el-table :data="pageSelectData" style="width: 100%" height="100%" class="blog-table">
                <el-table-column prop="BLOG_TITLE" fixed="left" label="日志标题" width="" />
                <el-table-column prop="BLOG_CREATE_TIME" label="创建时间" width="" />
                <el-table-column prop="BLOG_UPDATE_TIME" label="更新时间" width="" />
                <el-table-column prop="BLOG_TAGS" label="标签" width="">
                    <template v-slot="scope">
                        <div style="display: flex; flex-wrap: wrap; gap: 4px">
                            <template v-for="(tag, index) in scope.row.BLOG_TAGS.split('|')">
                                <div v-if="index < 3" :key="tag" :class="['tag-badge', `tag-color-${getTagColorIndex(tag)}`]">
                                    {{ tag.trim() }}
                                </div>
                            </template>
                            <el-tooltip v-if="scope.row.BLOG_TAGS.split(',').length > 3" effect="light">
                                <template #content>
                                    <div style="display: flex; flex-wrap: wrap; gap: 4px; max-width: 200px">
                                        <div
                                            v-for="tag in scope.row.BLOG_TAGS.split(',')"
                                            :key="tag"
                                            :class="['tag-badge', `tag-color-${ (tag)}`]"
                                        >
                                            {{ tag.trim() }}
                                        </div>
                                    </div>
                                </template>
                                <div class="tag-more">+{{ scope.row.BLOG_TAGS.split(',').length - 3 }}更多</div>
                            </el-tooltip>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template v-slot="scope">
                        <el-button @click="row_click(scope.row)" size="small" class="view-button">查看</el-button>
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

const getTagColorIndex = tag => {
    let hash = 0
    for (let i = 0; i < tag.length; i++) {
        hash = tag.charCodeAt(i) + ((hash << 5) - hash)
    }
    return (Math.abs(hash) % 6) + 1
}
</script>

<style scoped>
.blog-list-container {
    border: 3px dashed #cccccc;
    border-radius: 3px;
    margin: 3px;
    padding: 3px;
}

.tag-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    margin: 2px;
    transition: all 0.3s ease;
}

.tag-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: default;
}

.tag-color-1 {
    background-color: #f0f9eb;
    color: #67c23a;
    border: 1px solid #e1f3d8;
}
.tag-color-2 {
    background-color: #fdf6ec;
    color: #e6a23c;
    border: 1px solid #faecd8;
}
.tag-color-3 {
    background-color: #fef0f0;
    color: #f56c6c;
    border: 1px solid #fde2e2;
}
.tag-color-4 {
    background-color: #ecf5ff;
    color: #409eff;
    border: 1px solid #d9ecff;
}
.tag-color-5 {
    background-color: #f9f0ff;
    color: #8a2be2;
    border: 1px solid #e6d3ff;
}
.tag-color-6 {
    background-color: #f0f0f0;
    color: #606266;
    border: 1px solid #e4e7ed;
}

.tag-more {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    background-color: #f5f5f5;
    color: #909399;
    font-size: 12px;
    margin: 2px;
    cursor: pointer;
}

.tag-more:hover {
    background-color: #e9e9eb;
}
</style>
