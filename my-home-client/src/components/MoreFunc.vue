<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button type="primary">
        更多<el-icon class="el-icon--right">
          <Watermelon />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>逛地球</el-dropdown-item>
          <el-dropdown-item>写博客</el-dropdown-item>
          <el-dropdown-item>学英语</el-dropdown-item>
          <el-dropdown-item>关于我</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { Watermelon } from '@element-plus/icons-vue';
</script>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
