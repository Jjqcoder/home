<template>

  <div class="aboutcontainer">
    <div class="center-text">
      <h1>🤟</h1>
    </div>
    <div><a href="https://juejin.cn/user/4051056254523991">✨掘金⛏️</a></div>
    <div><a href="https://github.com/Jjqcoder">✨GitHub🎈</a></div>
    <div><a href="https://leetcode.cn/u/windy0_0/">✨力扣🧐</a></div>

    <div>
      ✨公众号(主要用来记录学英语的过程)
      <img class="qrcode" src="../../assets/qrcode.jpg" alt="">
      <span class="small">[看不见我看不见我🙈]</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.aboutcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  p {
    font-size: 2em;
  }
  height: 3em;
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
  height: 1em;
}

.qrcode:hover {
  transform: scale(6);
  transition: transform 1s ease; /* 添加过渡效果，使变化更平滑 */
}

.small {
  font-size: 0.2em;
}

div {
  text-align: center;
}
</style>