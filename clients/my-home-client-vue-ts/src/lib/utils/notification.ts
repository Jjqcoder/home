/**
 * 创建时间: 2025-06-11
 * 作者: jjq
 * 描述: 公告
 */

export class Notification {
    /**
     * 构造函数
     * @param {Object} options 配置选项
     * @param {string} options.content 公告内容
     * @param {string} options.position 位置，可选：'top-left', 'top-right', 'bottom-left', 'bottom-right'（默认'top-right'）
     * @param {number} options.duration 显示持续时间（毫秒，默认3000）
     * @param {string} options.backgroundColor 背景颜色（默认'rgba(255, 255, 255, 0.9)'）
     * @param {string} options.textColor 文字颜色（默认'#333'）
     * @param {number} options.zIndex z-index值（默认1000）
     * @param {boolean} options.autoClose 是否自动关闭（默认true）
     * @param {boolean} options.clickToClose 点击关闭（默认false）
     * @param {Object} options.customStyle 自定义样式对象
     */
    constructor(options = {}) {
        this.defaultOptions = {
            content: '【通知】这是一个公告',
            position: 'top-right',
            duration: 8000,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            textColor: '#333',
            zIndex: 1000,
            autoClose: true,
            clickToClose: false,
            customStyle: {}
        };
        
        this.options = {...this.defaultOptions, ...options};
        this.noticeElement = null;
        this.timeoutIds = [];
    }
    
    /**
     * 显示通知
     */
    show() {
        if (this.noticeElement) {
            this.hide();
        }
        
        this.createNotice();
        this.setupNoticeEvents();
        this.showNoticeWithAnimation();
        
        if (this.options.autoClose) {
            this.setupAutoClose();
        }
    }
    
    /**
     * 隐藏通知
     */
    hide() {
        if (!this.noticeElement) return;
        
        // 清除所有定时器
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        
        // 开始淡出动画
        this.noticeElement.style.opacity = '0';
        
        // 动画结束后移除元素
        const handleTransitionEnd = () => {
            if (this.noticeElement && this.noticeElement.style.opacity === '0') {
                this.noticeElement.removeEventListener('transitionend', handleTransitionEnd);
                document.body.removeChild(this.noticeElement);
                this.noticeElement = null;
            }
        };
        
        this.noticeElement.addEventListener('transitionend', handleTransitionEnd);
    }
    
    /**
     * 创建通知元素
     */
    createNotice() {
        this.noticeElement = document.createElement('div');
        this.noticeElement.textContent = this.options.content;
        
        // 应用基础样式
        this.applyBaseStyles();
        
        // 应用位置样式
        this.applyPositionStyles();
        
        // 应用自定义样式
        this.applyCustomStyles();
        
        // 初始透明
        this.noticeElement.style.opacity = '0';
        this.noticeElement.style.transition = 'opacity 0.5s ease-in-out';
        
        document.body.appendChild(this.noticeElement);
    }
    
    /**
     * 应用基础样式
     */
    applyBaseStyles() {
        const style = this.noticeElement.style;
        
        style.position = 'fixed';
        style.padding = '10px 20px';
        style.backgroundColor = this.options.backgroundColor;
        style.color = this.options.textColor;
        style.borderRadius = '4px';
        style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        style.fontSize = '14px';
        style.fontFamily = 'system-ui, -apple-system, sans-serif';
        style.zIndex = this.options.zIndex;
        style.maxWidth = '300px';
        style.wordBreak = 'break-word';
    }
    
    /**
     * 应用位置样式
     */
    applyPositionStyles() {
        const style = this.noticeElement.style;
        
        switch (this.options.position) {
            case 'top-left':
                style.top = '20px';
                style.left = '20px';
                break;
            case 'bottom-left':
                style.bottom = '20px';
                style.left = '20px';
                break;
            case 'bottom-right':
                style.bottom = '20px';
                style.right = '20px';
                break;
            case 'top-right':
            default:
                style.top = '90px';/* 避免遮挡“全部功能”按钮 */
                style.right = '20px';
        }
    }
    
    /**
     * 应用自定义样式
     */
    applyCustomStyles() {
        for (const [key, value] of Object.entries(this.options.customStyle)) {
            this.noticeElement.style[key] = value;
        }
    }
    
    /**
     * 设置通知事件
     */
    setupNoticeEvents() {
        if (this.options.clickToClose) {
            this.noticeElement.style.cursor = 'pointer';
            this.noticeElement.addEventListener('click', () => this.hide());
        }
    }
    
    /**
     * 显示通知动画
     */
    showNoticeWithAnimation() {
        // 强制重绘并开始淡入
        this.timeoutIds.push(setTimeout(() => {
            if (this.noticeElement) {
                this.noticeElement.style.opacity = '1';
            }
        }, 10));
    }
    
    /**
     * 设置自动关闭
     */
    setupAutoClose() {
        // 当 duration <= 0 时不自动关闭
        if (this.options.autoClose && this.options.duration > 0) {
            this.timeoutIds.push(setTimeout(() => {
            this.hide();
            }, this.options.duration));
        }
    }
}


/* 使用示例开始 */
// 基本使用
// const notification = new Notification({ content: '这是一个测试通知' });
// notification.show();

// 带配置的使用
// const notification = new Notification({
//     content: '操作成功！',
//     position: 'bottom-right',
//     duration: 5000,
//     backgroundColor: 'rgba(25, 135, 84, 0.9)',
//     textColor: '#fff',
//     clickToClose: true,
//     customStyle: {
//         fontSize: '16px',
//         padding: '15px 25px'
//     }
// });
// notification.show();

// 单次点击触发通知
// export const announcement = () => {
//     const handler = () => {
//         const notification = new Notification({
//             content: '【测试】我是一个公告信息',
//             duration: 3000
//         });
//         notification.show();
//         document.removeEventListener('click', handler);
//     };
//     document.addEventListener('click', handler);
// };

// 永久显示（自动关闭为false 或 duration <= 0）
// new Notification({
//   content: '永久公告',
//   autoClose: false, // 或 duration: 0
// }).show();
/* 使用示例结束 */