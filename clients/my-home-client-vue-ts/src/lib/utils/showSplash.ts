/**
 * 开场图片显示管理器
 * 
 * 功能：
 * 1. 显示一个全屏的开场图片和文字
 * 2. 支持发光效果和动画
 * 3. 点击后淡出消失
 * 4. 返回Promise以便于后续操作
 * 
 * 创建时间: 2025-06-18
 * 作者: jjq
 */

class SplashManager {
    private container: HTMLElement | null = null;
    private styleElement: HTMLStyleElement | null = null;
    private isClosing: boolean = false;
    private resolvePromise: (() => void) | null = null;

    /**
     * 显示开场画面
     * @param imageUrl 图片URL
     * @param text 显示的文字
     * @param glowColor 发光颜色，默认为金色
     * @param zIndex z-index值，默认为10001
     * @returns Promise，当画面关闭时resolve
     */
    public show(
        imageUrl: string, 
        text?: string, 
        glowColor: string = 'rgba(218, 165, 32, 0.8)', 
        zIndex: number = 10001
    ): Promise<void> {
        return new Promise((resolve) => {
            this.resolvePromise = resolve;
            this.createStyle(glowColor, zIndex);
            this.createContainer();
            this.createImage(imageUrl);
            this.createGlowEffect(glowColor);
            
            if (text) {
                this.createText(text);
            }
            
            this.addEventListeners();
        });
    }

    /**
     * 创建样式元素
     * @param glowColor 发光颜色
     * @param zIndex z-index值
     */
    private createStyle(glowColor: string, zIndex: number): void {
        this.styleElement = document.createElement('style');
        this.styleElement.textContent = `
            #splash-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #000;
                z-index: ${zIndex};
                cursor: default;
                opacity: 1;
                transition: opacity 0.5s ease-out;
            }
            
            .splash-image-container {
                position: relative;
                width: 30vmin;
                height: 30vmin;
                border-radius: 50%;
                overflow: hidden;
                box-shadow: 
                    0 0 20px ${glowColor.replace('0.8', '0.5')},
                    0 0 40px ${glowColor.replace('0.8', '0.3')},
                    0 0 60px ${glowColor.replace('0.8', '0.2')};
            }
            
            .splash-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                user-select: none;
                pointer-events: none;
            }
            
            .splash-glow {
                position: absolute;
                top: -8px;
                left: -8px;
                right: -8px;
                bottom: -8px;
                border-radius: 50%;
                border: 3px solid transparent;
                border-image: linear-gradient(45deg, ${glowColor}, ${glowColor.replace('0.8', '0.4')}) 1;
                filter: blur(4px);
                animation: glow 2s infinite alternate;
                pointer-events: none;
            }
            
            .splash-text {
                margin-top: 2vmin;
                color: white;
                font-size: 3vmin;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
                animation: textFlicker 1.5s infinite alternate;
                opacity: 0.8;
                user-select: none;
                pointer-events: none;
            }
            
            @keyframes glow {
                0% {
                    box-shadow: 0 0 20px ${glowColor.replace('0.8', '0.5')};
                    border-color: ${glowColor.replace('0.8', '0.3')};
                }
                100% {
                    box-shadow: 0 0 40px ${glowColor.replace('0.8', '0.8')};
                    border-color: ${glowColor.replace('0.8', '0.6')};
                }
            }
            
            @keyframes textFlicker {
                0% {
                    opacity: 0.7;
                    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                }
                100% {
                    opacity: 1;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
                }
            }
        `;
        document.head.appendChild(this.styleElement);
    }

    /**
     * 创建容器元素
     */
    private createContainer(): void {
        this.container = document.createElement('div');
        this.container.id = 'splash-container';
        document.body.appendChild(this.container);
    }

    /**
     * 创建图片元素
     * @param imageUrl 图片URL
     */
    private createImage(imageUrl: string): void {
        if (!this.container) return;

        const imageContainer = document.createElement('div');
        imageContainer.className = 'splash-image-container';

        const img = document.createElement('img');
        img.className = 'splash-image';
        img.src = imageUrl;

        imageContainer.appendChild(img);
        this.container.appendChild(imageContainer);
    }

    /**
     * 创建发光效果元素
     * @param glowColor 发光颜色
     */
    private createGlowEffect(glowColor: string): void {
        if (!this.container) return;

        const glow = document.createElement('div');
        glow.className = 'splash-glow';
        
        const imageContainer = this.container.querySelector('.splash-image-container');
        if (imageContainer) {
            imageContainer.appendChild(glow);
        }
    }

    /**
     * 创建文字元素
     * @param text 显示的文字
     */
    private createText(text: string): void {
        if (!this.container) return;

        const textDiv = document.createElement('div');
        textDiv.className = 'splash-text';
        textDiv.textContent = text;
        this.container.appendChild(textDiv);
    }

    /**
     * 添加事件监听器
     */
    private addEventListeners(): void {
        if (!this.container) return;

        this.container.addEventListener('click', this.handleClick.bind(this));
    }

    /**
     * 点击事件处理函数
     */
    private handleClick(): void {
        if (this.isClosing || !this.container) return;
        this.isClosing = true;

        // 移除点击事件监听器
        this.container.removeEventListener('click', this.handleClick);

        // 开始淡出动画
        this.container.style.opacity = '0';

        // 动画结束后清理
        setTimeout(() => {
            this.cleanUp();
        }, 500);
    }

    /**
     * 清理DOM元素和资源
     */
    private cleanUp(): void {
        if (this.styleElement && this.styleElement.parentNode === document.head) {
            document.head.removeChild(this.styleElement);
        }

        if (this.container && this.container.parentNode === document.body) {
            document.body.removeChild(this.container);
        }

        // 解析Promise
        if (this.resolvePromise) {
            this.resolvePromise();
        }

        // 重置状态
        this.container = null;
        this.styleElement = null;
        this.isClosing = false;
        this.resolvePromise = null;
    }

    /**
     * 强制关闭开场画面
     */
    public close(): void {
        if (this.isClosing) return;
        this.handleClick();
    }
}

// 导出单例实例
export const splashManager = new SplashManager();