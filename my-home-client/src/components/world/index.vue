<template>
  <div ref="worldBox" style="width: 300px;height: 300px;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import 'echarts-gl';
import earthBg from './../../assets/earth.png'; //导入背景纹理

const worldBox = ref(null);

onMounted(async () => {
  world_fun();
});

const world_fun = () => {
  var BlChart = echarts.init(worldBox.value);
  var option = {
    globe: {
      baseTexture: earthBg, // 地球表面覆盖的图片
      shading: 'color', // 地球中三维图形的着色效果
      zoom: 2,
      viewControl: {
        autoRotate: true, // 自动旋转
        autoRotateSpeed: 3, //物体自转的速度,单位为角度 / 秒，默认为10也就是36秒转一圈。
        autoRotateAfterStill: 2, // 在鼠标静止操作后恢复自动旋转的时间间隔,默认 3s
        rotateSensitivity: 2, // 旋转操作的灵敏度，值越大越灵敏.设置为0后无法旋转。[1, 0]只能横向旋转.[0, 1]只能纵向旋转
        targetCoord: [116.46, 39.92], // 定位到北京
        maxDistance: 400,
        minDistance: 200,
      },
    },
    series: [
      {
        name: 'lines3D',
        type: 'lines3D',
        coordinateSystem: 'globe',
        effect: {
          show: true,
        },
        blendMode: 'lighter',
        lineStyle: {
          color: '#fff',
          width: 1,
        },
        data: [],
        silent: false,
      },
    ],
  };
  // 随机数据 i控制线数量
  for (let i = 0; i < 30; i++) {
    option.series[0].data = option.series[0].data.concat(randomData());
  }
  BlChart.setOption(option);
  window.onresize = () => {
    BlChart.resize();
  };
};

// 随机生成起始及终点经纬度坐标
const randomData = () => {
  let name = '随机点' + Math.random().toFixed(5) * 100000;
  // 起点经纬度-北京
  let longitude = 116.2,
    latitude = 39.56;
  // 随机终点经纬度
  let longitude2 = Math.random() * 360 - 180;
  let latitude2 = Math.random() * 180 - 90;
  return {
    coords: [
      [longitude, latitude],
      [longitude2, latitude2],
    ],
    value: (Math.random() * 3000).toFixed(2),
  };
};
</script>