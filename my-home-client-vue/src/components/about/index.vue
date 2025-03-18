<template>
  <div class="about-container" :style="lightEffect">
    <div class="about-content">
      <div class="center-text">
        <h1>你好啊 旅行者！</h1>
        <span>最后更新时间：2025年3月18日</span>
      </div>

      <p>我叫江建清，来自福建莆田。23年毕业后来到泉州工作到了现在。目前正在找工作!</p>
      <p>我接触过的开发框架主要有
        <span>Express</span>（最最最喜欢的框架！！）、
        <span>Koa</span>（大学毕设用过）、
        <span>Egg</span>（大学毕设用过）、
        <span>SpringBoot</span>（找蛙必备神器）、
        <span>Vue</span>（大学毕设用过vue2，工作用vue3）、
        <span>React</span>（工作中会使用到）、
        <span>Kettle</span>（一个优秀的ETL工具！！工作中重度使用此工具！不过比较小众，就放在后面吧！）
      </p>
      <p>
        我的爱好有<span>摄影</span>（尼康佬在此！曾去钟楼找模特拍照，作为社恐的我来说，真的算是突破自我了！）、
        <span>徒步</span>（可以帮我从疲劳中快速脱离出来！泉州徒步推荐地点——大坪山、丰海路。非常推荐大家在有空的时候去徒步一下，背上行囊，好好看看那座你生存的城市吧❤️）、
        <span>古玩</span>（很喜欢手串戴在手上，随着时间流逝，颜色慢慢变化的那种感觉。手汗偏多的朋友们推荐菩提小金刚和紫金鼠，价格便宜【十几块】且耐造！），
        <span>学习英语</span>（每日英语听力重度使用者，累计打卡694天，累计时长1143h）
      </p>
      <!-- <div class="link-item">
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
      </div> -->
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

// .center-text:hover {
//   transform: scale(1.2);
//   transition: transform 0.3s ease;
// }

// .center-text:active {
//   transform: scale(0.9);
//   transition: transform 0.3s ease;
// }

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
  transition: transform 10s ease;
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

span {
  animation: changeColor 1s infinite alternate;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: underline;
}

@keyframes changeColor {
  0% {
    color: rgb(255, 166, 0); /* 橙色 */
  }
  50% {
    color: rgb(255, 102, 153); /* 粉红色 */
  }
  100% {
    color: rgb(102, 153, 255); /* 浅蓝色 */
  }
}
</style>