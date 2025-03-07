<template>
  <el-table :data="pageSelectData" style="width: 100%" height="100%">
    <el-table-column fixed prop="id" label="日志标识" width="" />
    <el-table-column prop="blogTitle" label="日志标题" width="" />
    <el-table-column prop="blogCreateTime" label="创建时间" width="" />
    <el-table-column prop="blogUpdateTime" label="更新时间" width="" />
    <el-table-column fixed="right" label="操作" width="">
      <template v-slot="scope">
        <el-button @click="row_click(scope.row)" size="small">查看</el-button>
      </template>
      </el-table-column>
      <!-- <el-table-column prop="blogContent" label="文章内容" width="600" /> -->
    
  </el-table>
</template>

<script lang="" setup>
// 引入defineProps,ref
import { defineProps, ref } from 'vue';

// 定义props，实现父元素元素的接收
const myProps = defineProps({
  pageSelectData: {
    required: true,
  },
});

// 点击查看文章所触发的回调
const row_click = (row) => {
  // 点击查看文章所触发的回调
  console.log(row);
};
</script>
