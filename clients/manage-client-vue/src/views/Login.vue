<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="login-title">用户登录</h2>
      <el-form @submit.prevent="handleLogin">
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="User"
          />
        </el-form-item>
        
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        
        <el-form-item class="action-buttons">
          <el-button type="primary" native-type="submit">登录</el-button>
          <el-button type="info" @click="handleRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const loginForm = ref({
  username: '',
  password: ''
})

const handleLogin = () => {
  console.log('登录信息:', {
    username: loginForm.value.username,
    password: loginForm.value.password
  })
  ElMessage.success('登录成功')
}

const handleRegister = () => {
  console.log('注册信息:', {
    username: loginForm.value.username,
    password: loginForm.value.password
  })
  ElMessage.success('注册成功')
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  width: 400px;
  padding: 20px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.action-buttons .el-button {
  flex: 1;
}
</style>