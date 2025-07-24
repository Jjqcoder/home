/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 暗色护眼功能
 * 版本: 2.0 (修复UI框架兼容性问题)
 */

export class EyeProtection {
    private options: Options;
    private toggleBtn: HTMLButtonElement | null = null;
    private overlay: HTMLDivElement | null = null;

    /**
     * 初始化暗色护眼功能
     * @param {Options} options - 配置选项
     */
    constructor(options: Options = {
        opacity: 0.6,
        buttonText: '护眼模式',
        position: 'bottom-right',
        zIndex: {
            overlay: 9999,
            button: 10000
        }
    }) {
        // 合并默认配置和用户传入的配置
        this.options = {
            opacity: 0.5,
            buttonText: '暗色护眼',
            position: 'bottom-right',
            zIndex: {
                overlay: 9998,
                button: 9999
            },
            ...options
        };

        // 确保DOM和UI框架加载完成
        const init = (): void => {
            try {
                console.debug('[暗色护眼] 开始初始化');
                this.initialize();
            } catch (error) {
                console.error('[暗色护眼] 初始化失败:', error);
            }
        };

        if (document.readyState === 'complete') {
            setTimeout(init, 300);
        } else {
            window.addEventListener('load', () => setTimeout(init, 300));
        }
    }

    /**
     * 初始化暗色护眼功能的内部逻辑
     */
    private initialize(): void {
        // 创建切换按钮
        this.toggleBtn = this.createToggleButton();
        // 创建遮罩层
        this.overlay = this.createOverlay();

        if (!this.toggleBtn || !this.overlay) {
            throw new Error('元素创建失败');
        }

        // 初始化状态
        this.initState();
        
        // 设置事件监听
        this.setupEventListeners();
    }

    /**
     * 创建切换按钮
     * @returns {HTMLButtonElement} 切换按钮
     */
    private createToggleButton(): HTMLButtonElement {
        // 如果已存在则返回现有按钮
        const existingBtn: HTMLButtonElement | null = document.getElementById('eye-protection-toggle') as HTMLButtonElement;
        if (existingBtn) return existingBtn;

        const btn: HTMLButtonElement = document.createElement('button');
        btn.id = 'eye-protection-toggle';
        btn.textContent = this.options.buttonText;
        btn.setAttribute('data-eye-protection', 'toggle');

        // 定义按钮位置的样式映射
        const positionMap: { [key: string]: { [key: string]: string } } = {
            'top-left': { top: '20px', left: '20px' },
            'top-right': { top: '20px', right: '20px' },
            'bottom-left': { bottom: '20px', left: '20px' },
            'bottom-right': { bottom: '20px', right: '20px' }
        };

        // 设置按钮的基础样式
        Object.assign(btn.style, {
            position: 'fixed',
            zIndex: this.options.zIndex.button.toString(),
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif',
            transition: 'all 0.3s ease',
            ...positionMap[this.options.position]
        });

        // 设置按钮的重要样式（使用setProperty保证优先级）
        btn.style.setProperty('background-color', '#333', 'important');
        btn.style.setProperty('color', 'white', 'important');
        btn.style.setProperty('box-shadow', '0 2px 12px 0 rgba(0, 0, 0, 0.2)', 'important');

        document.body.appendChild(btn);
        return btn;
    }

    /**
     * 创建遮罩层
     * @returns {HTMLDivElement} 遮罩层
     */
    private createOverlay(): HTMLDivElement {
        // 如果已存在则返回现有遮罩层
        const existingOverlay: HTMLDivElement | null = document.getElementById('eye-protection-overlay') as HTMLDivElement;
        if (existingOverlay) return existingOverlay;

        const overlay: HTMLDivElement = document.createElement('div');
        overlay.id = 'eye-protection-overlay';
        overlay.setAttribute('data-eye-protection', 'overlay');

        // 设置遮罩层的基础样式
        Object.assign(overlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: this.options.zIndex.overlay.toString(),
            pointerEvents: 'none'
        });

        // 设置遮罩层的重要样式
        overlay.style.setProperty('background-color', `rgba(0, 0, 0, ${this.options.opacity})`, 'important');
        overlay.style.setProperty('display', 'none', 'important');

        document.body.appendChild(overlay);
        return overlay;
    }

    /**
     * 初始化状态
     */
    private initState(): void {
        // 检查是否已激活暗色护眼模式
        const isActive: boolean = localStorage.getItem('eyeProtectionActive') === 'true';
        if (isActive) {
            document.body.classList.add('eye-protection-active');
            this.overlay!.style.setProperty('display', 'block', 'important');
            this.toggleBtn!.style.setProperty('background-color', '#000', 'important');
            this.toggleBtn!.style.setProperty('box-shadow', '0 0 20px 15px rgba(0, 0, 0, 1)', 'important');
        }
    }

    /**
     * 设置事件监听
     */
    private setupEventListeners(): void {
        /**
         * 点击切换按钮的处理函数
         * @param {Event} e - 事件对象
         */
        const handleClick = (e: Event): void => {
            e.stopPropagation();
            e.preventDefault();

            const isActive: boolean = document.body.classList.toggle('eye-protection-active');
            
            if (isActive) {
                this.overlay!.style.setProperty('display', 'block', 'important');
                this.toggleBtn!.style.setProperty('background-color', '#000', 'important');
                this.toggleBtn!.style.setProperty('box-shadow', '0 0 20px 15px rgba(0, 0, 0, 1)', 'important');
                localStorage.setItem('eyeProtectionActive', 'true');
            } else {
                this.overlay!.style.setProperty('display', 'none', 'important');
                this.toggleBtn!.style.setProperty('background-color', '#333', 'important');
                this.toggleBtn!.style.setProperty('box-shadow', '0 2px 12px 0 rgba(0, 0, 0, 0.2)', 'important');
                localStorage.setItem('eyeProtectionActive', 'false');
            }
        };

        // 使用捕获阶段确保触发
        this.toggleBtn!.addEventListener('click', handleClick, true);

        /**
         * 鼠标悬停在切换按钮上的处理函数
         */
        const handleMouseEnter = (): void => {
            if (!document.body.classList.contains('eye-protection-active')) {
                this.toggleBtn!.style.setProperty('background-color', '#555', 'important');
            }
        };

        /**
         * 鼠标离开切换按钮的处理函数
         */
        const handleMouseLeave = (): void => {
            if (!document.body.classList.contains('eye-protection-active')) {
                this.toggleBtn!.style.setProperty('background-color', '#333', 'important');
            }
        };

        this.toggleBtn!.addEventListener('mouseenter', handleMouseEnter);
        this.toggleBtn!.addEventListener('mouseleave', handleMouseLeave);
    }

    /**
     * 销毁暗色护眼功能
     */
    public destroy(): void {
        [this.toggleBtn, this.overlay].forEach(el => el && el.remove());
        document.body.classList.remove('eye-protection-active');
        localStorage.removeItem('eyeProtectionActive');
    }
}

// 定义配置选项的接口
interface Options {
    opacity?: number;
    buttonText?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    zIndex?: {
        overlay?: number;
        button?: number;
    };
}

// 使用示例
// const eyeProtection = new EyeProtection();
// 销毁时调用
// eyeProtection.destroy();