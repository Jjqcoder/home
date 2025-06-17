import { createApp } from 'vue';
// 引入自定义字体到main.js
import App from './App.vue';
import './font-style/font.css';
import { Notification, startInfo } from './lib';
import { initEyeProtection, showSplash } from './lib/index';
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

async function initializeApp() {
    /* 显示入场动画开始 */
    await showSplash('/windy.webp', 'Hello traveler!')
    /* 显示入场动画结束 */

    /* 正常渲染页面开始 */
    createApp(App).use(router).mount('#app')
    /* 正常渲染页面结束 */

    /* 护眼模式相关内容开始 */
    initEyeProtection({
        opacity: 0.6,
        buttonText: '护眼模式',
        zIndex: {
            overlay: 9999,
            button: 10000
        }
    });
    /* 护眼模式相关内容结束 */

}
initializeApp()




