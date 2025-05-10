<template>
    <div>
        <DataDisplay title="当前版本信息" subtitle="" :content="htmlContent" />
    </div>
</template>

<script setup>
import DataDisplay from '../../components/DataDisplay/index.vue'

// 获取前端版本信息
import {version} from './../../../package.json'

let data = version

const htmlContent = `
    <p>前端版本：${data}</p>
  `
</script>

<style></style>
