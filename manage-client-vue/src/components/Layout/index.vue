<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'" class="aside">
      <div class="logo-container">
        <span v-if="!isCollapse">Admin System</span>
        <span v-else>AS</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        :collapse="isCollapse"
        :collapse-transition="false"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        @select="handleMenuSelect"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Dashboard</span>
          </template>
          <el-menu-item index="1-1">Overview</el-menu-item>
          <el-menu-item index="1-2">Analytics</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="2">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>System</span>
          </template>
          <el-menu-item index="2-1">Users</el-menu-item>
          <el-menu-item index="2-2">Roles</el-menu-item>
          <el-menu-item index="2-3">Permissions</el-menu-item>
        </el-sub-menu>
        
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Documents</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <div class="header-left">
          <el-icon class="collapse-icon" @click="toggleCollapse">
            <expand v-if="isCollapse" />
            <fold v-else />
          </el-icon>
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>{{ currentPage }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        
        <div class="header-right">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar :size="30" :src="userAvatar" />
              <span class="username">{{ username }}</span>
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item>Settings</el-dropdown-item>
                <el-dropdown-item divided @click="handleLogout">Logout</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 主内容区 -->
      <el-main class="main">
        <el-scrollbar>
          <div class="content-container">
            <h2>{{ currentPage }} Content</h2>
            <div class="content-text">
              <p v-if="activeMenu === '1-1'">This is the Dashboard Overview page content. Here you can see a summary of your system's performance and key metrics.</p>
              <p v-else-if="activeMenu === '1-2'">This is the Dashboard Analytics page. Detailed charts and statistics about your system usage are displayed here.</p>
              <p v-else-if="activeMenu === '2-1'">User Management section. Here you can add, edit, and manage system users.</p>
              <p v-else-if="activeMenu === '2-2'">Role Management section. Define and assign roles to users in this section.</p>
              <p v-else-if="activeMenu === '2-3'">Permission Management area. Configure fine-grained access controls for your system.</p>
              <p v-else-if="activeMenu === '3'">Documentation center. Find all the system documentation and guides here.</p>
              <p v-else>Welcome to the Admin System. Please select a menu item to begin.</p>
            </div>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import {
  Location,
  Setting,
  Document,
  Fold,
  Expand,
  ArrowDown
} from '@element-plus/icons-vue'

// 状态管理
const isCollapse = ref(false)
const activeMenu = ref('1-1')
const username = ref('Admin')
const userAvatar = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

// 计算当前页面标题
const currentPage = computed(() => {
  switch (activeMenu.value) {
    case '1-1': return 'Overview'
    case '1-2': return 'Analytics'
    case '2-1': return 'Users'
    case '2-2': return 'Roles'
    case '2-3': return 'Permissions'
    case '3': return 'Documents'
    default: return 'Dashboard'
  }
})

// 方法
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

const handleMenuSelect = (index: string) => {
  activeMenu.value = index
}

const handleLogout = () => {
  console.log('Logout')
  // 这里添加登出逻辑
}
</script>

<style>
.layout-container {
  height: 100vh;
}

.aside {
  background-color: #304156;
  transition: width 0.3s;
  overflow: hidden;
}

.aside .logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: #2b2f3a;
}

.aside .el-menu-vertical {
  border-right: none;
  height: calc(100% - 60px);
}

.aside .el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header .header-left {
  display: flex;
  align-items: center;
}

.header .header-left .collapse-icon {
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
}

.header .header-left .breadcrumb {
  margin-left: 10px;
}

.header .header-right .el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header .header-right .el-dropdown-link .username {
  margin: 0 8px;
}

.main {
  padding: 20px;
  background-color: #f0f2f5;
}

.main .el-scrollbar {
  height: 100%;
}

.main .el-scrollbar .el-scrollbar__view {
  height: 100%;
}

.content-container {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.content-container h2 {
  color: #333;
  margin-bottom: 20px;
}

.content-text {
  color: #666;
  line-height: 1.6;
}
</style>