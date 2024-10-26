<!--
 * @Author: 江建清 1810422805@qq.com
 * @Date: 2024-10-25 22:04:51
 * @LastEditors: 江建清 1810422805@qq.com
 * @LastEditTime: 2024-10-26 22:06:11
 * @FilePath: \manage-client-vue\src\components\NavigateCom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: 江建清 1810422805@qq.com
 * @Date: 2024-10-25 22:04:51
 * @LastEditors: 江建清 1810422805@qq.com
 * @LastEditTime: 2024-10-25 22:19:08
 * @FilePath: \manage-client-vue\src\components\NavigateCom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><icon-menu /></el-icon>工具栏
            </template>
            <el-menu-item-group>
              <router-link to="/main/article">
                <el-menu-item index="1-1">
                  文章管理
                </el-menu-item>
              </router-link>
              <router-link to="/main/demo">
                <el-menu-item index="1-2">
                  待定
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-button type="primary" :icon="Sunny" circle></el-button>
          <el-button type="primary" :icon="Moon" circle></el-button>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
// 图标
import { Sunny, Moon } from '@element-plus/icons-vue';
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
/* 消除router-link的默认样式 */
a {
  text-decoration: none;
  color: #000000;
}
</style>