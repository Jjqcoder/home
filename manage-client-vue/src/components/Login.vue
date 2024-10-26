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
import { fetchData, postData } from './../utils/api'; // 引入api函数
import { ElMessage } from 'element-plus'; // 弹窗
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');

// 登录
// const log_in = function () {
//   // console.log('登录' + username.value + password.value);
//   fetchData(
//     `http://localhost:8090/login?username=${username.value}&password=${password.value}`
//   )
//     .then((response) => {
//       console.log(response);
//       if (response.data.code === 400) {
//         ElMessage({
//           message: response.data.message,
//           type: 'warning',
//         });
//       } else if (response.data.code === 200) {
//         // 登录成功之后,将token存储在本地
//         localStorage.setItem('token', response.data.data);

//         ElMessage({
//           message: response.data.message,
//           type: 'success',
//         });

//         // 路由跳转
//         router.push('/main');
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// login变成post请求
const log_in = function () {
  // 获取目标服务器url
  const targetUrl = process.env.VUE_APP_TARGET_URL;

  postData(`${targetUrl}login`, {
    username: username.value,
    password: password.value,
  })
    .then((response) => {
      if (response.data.code === 200) {
        // 将tokenName和tokenValue存储在本地
        localStorage.setItem('tokenName', response.data.data.data.tokenName);
        localStorage.setItem('tokenValue', response.data.data.data.tokenValue);

        ElMessage({
          message: response.data.message,
          type: 'success',
        });
        router.push('/main');
      } else if (response.data.code === 400) {
        ElMessage({
          message: response.data.message,
          type: 'warning',
        });
      }
    })
    .catch((error) => {
      console.log('失败：' + error);
    });
};

// 注册
const sign_in = function () {
  // 获取目标服务器url
  const targetUrl = process.env.VUE_APP_TARGET_URL;
  console.log('targetUrl' + targetUrl);
  postData(`${targetUrl}insertUserByUsernameAndPassword`, {
    username: username.value,
    password: password.value,
  })
    .then((response) => {
      if (response.data.code === 200) {
        console.log(response);
        ElMessage({
          message: response.data.message,
          type: 'success',
        });
      } else if (response.data.code === 400) {
        ElMessage({
          message: response.data.message,
          type: 'warning',
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style>
</style>