<template>
  <div>
    <fixedList class="my-blog" :pageSelectData="pageSelectData"></fixedList>
  </div>

  <div class="demo-pagination-block">
    <div class="demonstration"></div>
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[5, 8, 10]" :small="small" :disabled="disabled" :background="background"
      :pager-count="4" layout="prev, pager, next" :total="totalDataCount"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <!--下方是完全的: layout="total, sizes, prev, pager, next, jumper" :total="totalDataCount" -->
  </div>
</template>

<script lang="" setup>
import { ref, onMounted } from 'vue';
// 引入axios
import axios from 'axios';

// 引入fixedList组件
import fixedList from './../fixedList/index.vue';

// 引入环境变量
const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL;

// 记录一共有多少条数据
const totalDataCount = ref(100);
const currentPage = ref(1);
// 判断是手机端还是PC端
import { isMobileDevice } from '../../utils/index.js';

let pageSize;

if (isMobileDevice()) {
  // 手机端
  pageSize = ref(5);
} else {
  // PC端
  pageSize = ref(15);
}

const small = ref(false);
const background = ref(false);
const disabled = ref(false);
// 用于存储分页查询来的数据
const pageSelectData = ref(null);

// 配合onMounted，页面加载完成后就开始获取数据的条数
onMounted(() => {
  axios
    .get(`${in_use_base_url}/getBlogByPage`, {
      params: {
        current: currentPage.value,
        size: pageSize.value,
      },
    })
    .then((res) => {
      // 赋值博客的总条数
      totalDataCount.value = res.data.total;
      // 赋值当前分页获取到的数据
      pageSelectData.value = res.data.records.map((data) => {
        // 格式化日期
        data.blogCreateTime = new Date(
          new Date(data.blogCreateTime).getTime() - 8 * 60 * 60 * 1000
        ).toLocaleString();
        data.blogUpdateTime = new Date(
          new Date(data.blogUpdateTime).getTime() - 8 * 60 * 60 * 1000
        ).toLocaleString();
        return data;
      });
    });
});

// size发生变化发生的回调
const handleSizeChange = (val) => {
  // console.log(`${val} items per page`);
  pageSize.value = val;
  handleCurrentChange();
};

// 页码发生改变触发的回调
const handleCurrentChange = (val) => {
  // console.log(`current page: ${val}`);
  // console.log(`current pageSize: ${pageSize.value}`);

  // 当页码发生变化的时候，触发分页查询
  const res = axios
    .get(`${in_use_base_url}/getBlogByPage`, {
      params: {
        current: currentPage.value,
        size: pageSize.value,
      },
    })
    .then((res) => {
      pageSelectData.value = res.data.records;
    });
};
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

.demo-pagination-block {
  width: 430px;
}
.write {
  display: flex;
  justify-content: center;
  font-size: large;
}
.my-blog {
  border-top: 0.1px solid rgb(116, 38, 5);
}

.demo-pagination-block {
  width: 50%;
}
</style>
