<template>
  main页面
  展示全部用户信息：
  <br>
  {{ userData }}
  <br>
  message如下:
  {{ message }}

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
const handleMessage = (msg) => {  
      message.value = msg;  
      ElMessage({
          message: msg,
          type: 'info',
        });
}; 
onMounted(() => {  
      webSocketService.onMessage(handleMessage);  
}); 
</script>

<style>
</style>