<template>
  <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[5, 10, 100, 200]" :small="small" :disabled="disabled" :background="background"
      layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script lang="" setup>
import { ref } from 'vue';
// 引入axios
import axios from 'axios';
// 引入环境变量
const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL;
console.log(in_use_base_url);

const currentPage = ref(5);
const pageSize = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
// 用于存储分页查询来的数据
const pageSelectData = ref(null);

// size发生变化发生的回调
const handleSizeChange = (val) => {
  console.log(`${val} items per page`);
};

// 页码发生改变触发的回调
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
  console.log(`current pageSize: ${pageSize.value}`);

  // 当页码发生变化的时候，触发分页查询
  const res = axios.get(`http://${in_use_base_url}:8080/getBlogByPage`, {
    params: {
      current: currentPage.value,
      size: pageSize.value,
    },
  });
  console.log(res);
};
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
