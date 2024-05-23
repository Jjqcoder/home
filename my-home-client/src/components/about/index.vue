<template>
  <div class="center-text">
    <h1>🤟</h1>
  </div>
  <div class="container">
    <p><a href="https://juejin.cn/user/4051056254523991">1. 掘金⛏️</a></p>
    <p><a href="https://github.com/Jjqcoder">2. GitHub🎈</a></p>
    <p><a href="https://leetcode.cn/u/windy0_0/">3. 力扣🧐</a></p>
    <p>4. 公众号(主要用来记录学英语的过程)
    </p>
    <div>
      <img class="qrcode" src="./../../assets/qrcode.jpg" alt="">
    </div>
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
  p {
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

// 二维码
.qrcode {
  width: 3em;
}
</style>