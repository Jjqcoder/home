<template>
  <div class="flex flex-wrap items-center my-font-style">
    <el-dropdown>
      <el-button type="primary">
        更多<el-icon class="el-icon--right">
          <Watermelon />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link active-class="" to="/world">
            <el-dropdown-item>🌏逛地球</el-dropdown-item>
          </router-link>
          <router-link to="/blog">
            <el-dropdown-item>✍️写博客</el-dropdown-item>
          </router-link>
          <router-link to="/english">
            <el-dropdown-item>🔠学英语</el-dropdown-item>
          </router-link>
          <router-link to="/weather">
            <el-dropdown-item>🌤️查天气</el-dropdown-item>
          </router-link>
          <router-link to="/about">
            <el-dropdown-item>🤟关于我</el-dropdown-item>
          </router-link>
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

/* 改变router-link的默认样式:去掉超链接下面的下划线 */
a {
  text-decoration: none;
}
</style>
