<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
function handleClick() {
  count.value++
}
</script>

<template>
{{ count }}
<el-button type="primary" @click="handleClick">introducing element-plus</el-button>
</template>

<style scoped>

</style>
