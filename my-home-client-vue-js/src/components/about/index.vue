<template>
<!-- 关于我 页面 -->
  <div class="about">
    <div class="card">
      <div class="header">
        <h1>你好呀 旅行者！👋</h1>
        <span>最后更新时间：2025年06月06日</span>
      </div>

    <div class="section">
        <p>我是谁</p>
        <ul>
            <li>我叫江建清，2001年05月入驻🌏地球Online，来自福建莆田，2023年06月大学毕业并开启了属于自己的职业生涯。</li>
        </ul>
    </div>
      
      <div class="section">
        <p>我接触过的开发框架主要有：</p>
        <ul>
          <li><span>Express</span>【最最最喜欢的框架！！】</li>
          <li><span>Koa</span>【大学毕设用过】</li>
          <li><span>Egg</span>【大学毕设用过】</li>
          <li><span>SpringBoot</span>【爪蛙必备神器】</li>
          <li><span>Vue</span>【大学毕设用过vue2，工作用vue3】</li>
          <li><span>React</span>【工作中会使用到】</li>
          <li><span>Next</span>【仅写过小Demo】</li>
          <li><span>Flask</span>【仅写过小Demo】</li>
          <li><span>Kettle</span>【一个优秀的ETL工具！！工作中重度使用此工具！不过比较小众，就放在后面吧！】</li>
        </ul>
      </div>

      <div class="section">
        <p>我的爱好有：</p>
        <ul>
          <li><span>摄影</span>【尼康佬在此！曾去钟楼找模特拍照，作为社恐的我来说，真的算是突破自我了！】</li>
          <li><span>徒步</span>【🚶‍♂️可以帮我从疲劳中快速脱离出来！泉州徒步推荐地点：大坪山、丰海路。在丰海路徒步，风中带有泉州湾微咸的味道，堪称徒步的绝佳地点。深圳我来的时间相对比较短，目前主要是以一些公园和大学为目的地进行徒步，如龙华公园、大浪体育公园、德逸公园、阳台山森林公园、深圳大学与南方科技大学等。偶尔，不妨给自己一段慢下来的时间。背起行囊，用徒步的方式重新走走这座熟悉的城市。那些平日匆匆掠过的街角、未曾留意的老树、或是某条安静的小巷，或许都藏着意想不到的风景。不必刻意规划路线，只是随心而行，感受城市的呼吸与节奏。❤️】</li>
          <li><span>古玩</span>【很喜欢手串戴在手上，随着时间流逝，颜色慢慢变化的那种感觉。手汗偏多的朋友们推荐菩提小金刚和紫金鼠，价格便宜【十几块】且耐造！】</li>
          <li><span>学习英语</span>【每日英语听力重度使用者，累计打卡712天，累计时长1179h】</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.about {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
}

.card {
  max-width: 40rem;
  width: 100%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.2);
  }
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
  
  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
}

span {
  animation: changeColor 1s infinite alternate;
  font-weight: bold;
  text-decoration: underline;
}

@keyframes changeColor {
  0% { color: #ffa600; }
  50% { color: #ff6699; }
  100% { color: #6699ff; }
}
</style>