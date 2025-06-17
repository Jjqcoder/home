import { createApp } from 'vue';
// 引入自定义字体到main.js
import App from './App.vue';
import './font-style/font.css';
import { Notification, startInfo } from './lib';
import router from './router'; // 导入路由



/* 项目启动之后打印相关信息方便调试开始 */
startInfo()
/* 项目启动之后打印相关信息方便调试结束 */

/* 弹窗库测试开始 */
// 暂不启用
// 用户点击屏幕之后 进行弹窗
// document.addEventListener('click', (e) => {
//     Pane.show('你点击了屏幕', 'success');
// })
/* 弹窗库测试结束 */

/* 公告开始 */
// 目前暂不启用
const notification = new Notification({ content: '【测试】这是一个测试通知' });
notification.show();
/* 公告结束 */
createApp(App).use(router).mount('#app')
