<template>
  <h1>HOME-CLIENT-VUE✨</h1>
  <br>
  <br>
  <!-- 用户名 -->
  <el-input v-model="username" style="width: 240px" placeholder="Please input" clearable />
  <br>
  <br>
  <!-- 密码 -->
  <el-input v-model="password" style="width: 240px" type="password"
    placeholder="Please input password" show-password />
  <!-- 登录 -->
  <br>
  <br>
  <el-button type="primary" @click="log_in">登录</el-button>
  <el-button type="primary" @click="sign_in">注册</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');

// 引入api函数
import { fetchData, postData } from './../utils/api';

// 登录
const log_in = function () {
  console.log('登录' + username.value + password.value);
  fetchData(
    `http://localhost:8090/login?username=${username.value}&password=${password.value}`
  )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style>
</style>