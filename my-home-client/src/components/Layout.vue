

<script setup>
// 引入`更多功能`组件
// import MoreFunc from './more/index.vue';
// 引入页脚组件
import FooterCom from './footer/index.vue';
// 引入菜单组件-用于代替更多功能组件
import MenuCom from './../components/menu/index.vue';
</script>

<template>
  <el-row>
    <!-- 一共有24份 -->
    <!-- 左边留白 -->
    <el-col :span="1" style="background:white">
      <div class="grid-content" />
    </el-col>
    <!-- 导航栏左侧-LOGO -->
    <el-col :span="5" style="background:Beige">
      <div class="grid-content ep-bg-purple-dark my-home"><router-link to="/">
          <span class="my-logo">Home</span>
        </router-link></div>
    </el-col>
    <!-- 导航栏中心 -->
    <!-- <el-col :span="4" style="background:Beige">
      <div class="grid-content"><span class="my-search">搜索本站</span></div>
    </el-col> -->
    <!-- 导航栏右侧-存放下拉框，放入网站相关信息、功能 -->
    <el-col :span="17" style="background:Beige">
      <div class="grid-content"><span class="my-more">
          <!-- <MoreFunc /> -->
          <!-- 菜单 -->
          <MenuCom />
        </span></div>
    </el-col>
    <!-- 右边留白 -->
    <el-col :span="1" style="background:Khaki2">
      <div class="grid-content" />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="1" style="background:white" class="content">
      <div class="grid-content" />
    </el-col>
    <el-col :span="22" style="background:Cornsilk" class="content">
      <span class="my-content">
        <!-- 主体内容 -->
        <router-view></router-view>
      </span>
      <!-- 存放主体内容 -->
      <div class="grid-content" />

    </el-col>
    <!-- 右边留白 -->
    <el-col :span="1" style="background:white" class="content">
      <div class="grid-content" />
    </el-col>
  </el-row>
  <!-- 页脚开始 -->
  <el-row>
    <el-col :span="1" style="background:white">
      <div class="grid-content" />
    </el-col>
    <el-col :span="22">
      <FooterCom></FooterCom>
    </el-col>
    <el-col :span="1" style="background:white">
      <div class="grid-content" />
    </el-col>
  </el-row>
</template>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 45px;
}

// 新增样式
.content {
  min-height: 100vb; // 使用min-height 以确保当内容超过视口高度时，元素能够扩展以适应内容。着需要其父元素的高度为100%
}

.grid-content {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

.my-logo {
  font-size: 100%; // 继承父元素的字体大小
  color: DarkRed;
}

.my-search {
  font-size: 100%; // 继承父元素的字体大小
  color: DarkRed;
}

.my-more {
  font-size: 100%; // 继承父元素的字体大小
  color: DarkRed;
}

// 消除超链接的默认属性
/* 消除a标签的默认样式 */
a {
  text-decoration: none; /* 移除下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
  /* 其他你想要重置的样式 */
}

a:hover,
a:active,
a:focus {
  text-decoration: none; /* 移除鼠标悬停、激活和聚焦时的下划线 */
  /* 其他你想要重置的样式 */
}

/* 重新设置 hover 格式 */
a:hover {
  /* border: 1px solid black; */
  border-bottom: 3px solid rgba(171, 4, 4, 0.941);
}
</style>
