<template>
  <div class="blog-list-container" :style="lightEffect">
    <div class="blog-list-content">
      <el-table :data="pageSelectData" style="width: 100%" height="100%" class="blog-table">
        <el-table-column fixed prop="id" label="日志标识" width="" />
        <el-table-column prop="blogTitle" label="日志标题" width="" />
        <el-table-column prop="blogCreateTime" label="创建时间" width="" />
        <el-table-column prop="blogUpdateTime" label="更新时间" width="" />
        <el-table-column fixed="right" label="操作" width="">
          <template v-slot="scope">
            <el-button @click="row_click(scope.row)" size="small" class="view-button">
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';

const myProps = defineProps({
  pageSelectData: {
    required: true,
  },
});

const router = useRouter();
const mouseX = ref(0);
const mouseY = ref(0);

const row_click = (row) => {
  router.push({ name: 'blogDetail', params: { row: JSON.stringify(row) } });
  console.log(row);
};

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

const lightEffect = {
  background: `radial-gradient(circle at ${
    (mouseX.value / window.innerWidth) * 100
  }% ${(mouseY.value / window.innerHeight) * 100}%, #ffecd2, #fcb69f)`,
};

window.addEventListener('mousemove', updateMousePosition);
</script>

<style scoped>
.blog-list-container {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
}

.blog-list-content {
  max-width: 1200px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-list-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.blog-table {
  background: transparent;
}

.blog-table::v-deep .el-table__header-wrapper,
.blog-table::v-deep .el-table__body-wrapper {
  background: transparent;
}

.blog-table::v-deep .el-table__row {
  background: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
  border-radius: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-table::v-deep .el-table__row:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.view-button {
  background-color: #fcb69f;
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #ffecd2;
}
</style>