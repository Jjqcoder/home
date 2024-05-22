<template>
  <div class="center-text">
    <h1>✨如何联系我✨</h1>
  </div>
  <div class="container">
    <p><a href="https://juejin.cn/user/4051056254523991">掘金⛏️</a></p>
    <p><a href="https://github.com/Jjqcoder">GitHub🎈</a></p>
    <p><a href="https://leetcode.cn/u/windy0_0/">力扣🧐</a></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  a {
    font-size: 2em;
  }
}

.center-text {
  text-align: center;
}

.center-text:hover {
  transform: scale(1.2); /* 放大10% */
  transition: transform 0.3s ease; /* 添加过渡效果，使变化更平滑 */
}

.center-text:active {
  transform: scale(0.9); /* 放大10% */
  transition: transform 0.3s ease; /* 添加过渡效果，使变化更平滑 */
}
</style>