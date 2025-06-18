import { createApp } from 'vue';
// 引入自定义字体到main.js
import App from './App.vue';
import './font-style/font.css';
import {
    ClickEffects,
    enableCustomSelectionStyle,
    initEyeProtection,
    setPointingCursor,
    showSplash,
    startInfo
} from './lib';
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



/* 改变鼠标的样子为手指开始 */
setPointingCursor()
/* 改变鼠标的样子为手指结束 */

async function initializeApp() {
    /* 显示入场动画开始 */
    // await showSplash('/img/windy.webp', 'Hello traveler!', 'rgba(218, 165, 32, 0.8)', 10001)
    await showSplash('/img/furina.jpg', 'Hello traveler!', 'rgba(47, 164, 231, 0.8)', 10001)
    /* 显示入场动画结束 */
}
initializeApp()
// ===========================================不影响后续的页面渲染，解决白屏问题开始===========================================
/* 正常渲染页面开始 */
createApp(App).use(router).mount('#app')
/* 正常渲染页面结束 */

/* 护眼模式相关内容开始 */
initEyeProtection();
/* 护眼模式相关内容结束 */

/* 美化点击效果开始 */
new ClickEffects();
/* 美化点击效果结束 */

/* 文字选中样式开始 */
enableCustomSelectionStyle()
/* 文字选中样式结束 */

/* 公告开始 */
// 注意 公告不要在此处进行发布 因为用户如果在开场图片出停留迟迟不进入主页面，页面会进行卡顿
// 而如果通过阻塞主页面渲染，虽然能让用户一进入页面就看到公告，但是会有白屏现象、
// 后续计划将公告单独封装成一个组件！
// const notification = new Notification({ content: '【测试】这是一个测试通知' });
// notification.show();
/* 公告结束 */
// ===========================================不影响后续的页面渲染，解决白屏问题开始===========================================