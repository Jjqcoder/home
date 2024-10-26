<!--
 * @Author: 江建清 1810422805@qq.com
 * @Date: 2024-10-12 20:14:38
 * @LastEditors: 江建清 1810422805@qq.com
 * @LastEditTime: 2024-10-26 20:54:53
 * @FilePath: \manage-client-vue\src\components\MainCom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- main页面
  展示全部用户信息：
  <br>
  {{ userData }}
  <br>
  message如下:
  {{ message }} -->
  <NavigateCom />

</template>

<script setup>
import { fetchData } from '../utils/api';
import { ElMessage } from 'element-plus'; // 弹窗
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const userData = ref('');

const router = useRouter();

onMounted(() => {
  fetchData('http://localhost:8090/getAllUser')
    .then((response) => {
      console.log(response);
      if (response.data.code === 400) {
        ElMessage({
          message: response.data.message,
          type: 'warning',
        });

        // 返回登录界面
        router.push('/');
      } else if (response.data.code === 200) {
        // 赋值
        userData.value = response.data.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// websocket相关
import { webSocketService } from '../services/webSocketService';
const message = ref('');

import { h } from 'vue';
import { ElNotification } from 'element-plus';

const handleMessage = (msg) => {
  message.value = msg;
  ElNotification({
    title: '提示信息',
    message: h('i', { style: 'color: teal' }, msg),
  });
};
onMounted(() => {
  webSocketService.onMessage(handleMessage);
});

// 引入导航组件
import { defineComponent } from 'vue';
import NavigateCom from './NavigateCom.vue';
</script>

<style>
</style>