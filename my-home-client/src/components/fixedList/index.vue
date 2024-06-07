<template>
  <!-- {{ pageSelectData }} -->
  <el-table :data="pageSelectData" style="width: 100%" height="100%">
    <el-table-column fixed prop="id" label="日志序号" width="80%" />
    <el-table-column prop="blogTitle" label="日志标题" width="" />
    <el-table-column prop="blogCreateTime" label="创建时间" width="" />
    <el-table-column prop="blogUpdateTime" label="更新时间" width="" />
    <el-table-column label="操作">

      <template v-slot="scope">
        <el-button @click="row_click(scope.row)">查看该日志</el-button>
      </template>

    </el-table-column>
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

import { useRouter } from 'vue-router';
const router = useRouter();
// 单击列表的一行
const row_click = (val) => {
  // console.log(val.id);
  // 开始请求指定的文章信息
  router.push({ name: 'articleView', query: { id: val.id } });
};
</script>
