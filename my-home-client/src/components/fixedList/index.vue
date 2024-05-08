<template>
  <!-- {{ pageSelectData }} -->
  <el-table :data="pageSelectData" style="width: 100%" height="100%">
    <el-table-column fixed prop="id" label="文章序号" width="80%" />
    <el-table-column prop="blogCreateTime" label="创建时间" width="" />
    <el-table-column prop="blogUpdateTime" label="更新时间" width="" />
    <el-table-column prop="blogTitle" label="文章标题" width="" />
    <!-- <el-table-column prop="blogContent" label="文章内容" width="600" /> -->
  </el-table>
</template>

<script lang="" setup>
// 引入defineProps
import { defineProps, ref } from 'vue';

// 定义props，实现父元素元素的接收
const myProps = defineProps({
  pageSelectData: {
    // type: Object,
    required: true,
  },
});

// const tableData = ref(myProps.pageSelectData);
</script>
