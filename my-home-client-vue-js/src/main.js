import { createApp } from 'vue';
// 引入自定义字体到main.js
import App from './App.vue';
import './font-style/font.css';
import { startInfo } from './lib';
import router from './router'; // 导入路由

/* 项目启动之后打印相关信息方便调试开始 */
startInfo()
/* 项目启动之后打印相关信息方便调试结束 */

createApp(App).use(router).mount('#app')
