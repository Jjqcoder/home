<template>
  <div class="about-container" :style="lightEffect">
    <div class="about-content">
      <div class="center-text">
        <h1>🤟</h1>
      </div>
      <div class="link-item">
        <a href="https://juejin.cn/user/4051056254523991" class="link">✨掘金⛏️</a>
      </div>
      <div class="link-item">
        <a href="https://github.com/Jjqcoder" class="link">✨GitHub🎈</a>
      </div>
      <div class="link-item">
        <a href="https://leetcode.cn/u/windy0_0/" class="link">✨力扣🧐</a>
      </div>
      <div class="qrcode-item">
        <span>✨公众号(主要用来记录学英语的过程,不过近期没有更新了)</span>
        <img class="qrcode" src="../../assets/qrcode.jpg" alt="公众号二维码" />
        <span class="small">[看不见我看不见我🙈]</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 背景渐变效果
const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

const lightEffect = {
  background: `radial-gradient(circle at ${
    (mouseX.value / window.innerWidth) * 100
  }% ${(mouseY.value / window.innerHeight) * 100}%, #ffecd2, #fcb69f)`,
};

window.addEventListener('mousemove', updateMousePosition);
</script>

<style scoped lang="less">
.about-container {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
}

.about-content {
  max-width: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.center-text {
  text-align: center;
  margin-bottom: 20px;
}

.center-text h1 {
  font-size: 3rem;
  margin: 0;
}

.center-text:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

.center-text:active {
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.link-item {
  margin: 10px 0;
  text-align: center;
}

.link {
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.link:hover {
  color: #fcb69f;
  transform: translateX(5px);
}

.qrcode-item {
  margin-top: 20px;
  text-align: center;
}

.qrcode {
  height: 1em;
  margin-top: 10px;
  transition: transform 1s ease;
}

.qrcode:hover {
  transform: scale(6);
}

.small {
  font-size: 0.8rem;
  color: #666;
  display: block;
  margin-top: 5px;
}
</style>