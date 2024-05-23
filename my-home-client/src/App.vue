<script setup>
</script>

<template>
  <div id="app">
    <!-- :key="Math.random() 解决刷新之后页面报错的情况 -->
    <router-view></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: my-font !important;
}
</style>

