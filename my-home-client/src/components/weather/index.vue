<template>
  <div id="app">
    <el-cascader size="large" :options="pcTextArr" v-model="selectedOptions">
    </el-cascader>
  </div>
</template>

<script setup>
import { pcTextArr } from 'element-china-area-data';
import { ref, watch } from 'vue';

const selectedOptions = ref([]);

watch(selectedOptions, (newValue, oldValue) => {
  console.log(oldValue, newValue);
});
</script>