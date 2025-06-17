/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 暗色护眼
 */

/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 暗色护眼功能
 * 版本: 2.0 (修复UI框架兼容性问题)
 */

/**
 * 初始化暗色护眼功能
 * @param {Object} options - 配置选项
 * @param {number} [options.opacity=0.5] - 遮罩层透明度 (0-1)
 * @param {string} [options.buttonText='暗色护眼'] - 按钮文字
 * @param {string} [options.position='bottom-right'] - 按钮位置
 * @param {Object} [options.zIndex] - z-index设置
 * @param {number} [options.zIndex.overlay=9998] - 遮罩层z-index
 * @param {number} [options.zIndex.button=9999] - 按钮z-index
 */
export function initEyeProtection(options = {
        opacity: 0.6,
        buttonText: '护眼模式',
        zIndex: {
            overlay: 9999,
            button: 10000
        }
    }) {
    // 默认配置
    const finalOptions = {
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
    const init = () => {
        try {
            console.debug('[暗色护眼] 开始初始化');
            initialize(finalOptions);
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

function initialize(options) {
    // 创建元素
    const toggleBtn = createToggleButton(options);
    const overlay = createOverlay(options);

    if (!toggleBtn || !overlay) {
        throw new Error('元素创建失败');
    }

    // 初始化状态
    initState(toggleBtn, overlay, options);
    
    // 设置事件监听（增强版）
    setupEventListeners(toggleBtn, overlay, options);
}

function createToggleButton(options) {
    // 如果已存在则返回现有按钮
    const existingBtn = document.getElementById('eye-protection-toggle');
    if (existingBtn) return existingBtn;

    const btn = document.createElement('button');
    btn.id = 'eye-protection-toggle';
    btn.textContent = options.buttonText;
    btn.setAttribute('data-eye-protection', 'toggle');

    // 位置样式
    const positionMap = {
        'top-left': { top: '20px', left: '20px' },
        'top-right': { top: '20px', right: '20px' },
        'bottom-left': { bottom: '20px', left: '20px' },
        'bottom-right': { bottom: '20px', right: '20px' }
    };

    // 强制样式（使用setProperty保证优先级）
    Object.assign(btn.style, {
        position: 'fixed',
        zIndex: options.zIndex.button.toString(),
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
        transition: 'all 0.3s ease',
        ...positionMap[options.position]
    });

    // 重要样式（使用setProperty加!important）
    btn.style.setProperty('background-color', '#333', 'important');
    btn.style.setProperty('color', 'white', 'important');
    btn.style.setProperty('box-shadow', '0 2px 12px 0 rgba(0, 0, 0, 0.2)', 'important');

    document.body.appendChild(btn);
    return btn;
}

function createOverlay(options) {
    const existingOverlay = document.getElementById('eye-protection-overlay');
    if (existingOverlay) return existingOverlay;

    const overlay = document.createElement('div');
    overlay.id = 'eye-protection-overlay';
    overlay.setAttribute('data-eye-protection', 'overlay');

    // 基础样式
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: options.zIndex.overlay.toString(),
        pointerEvents: 'none'
    });

    // 重要样式
    overlay.style.setProperty('background-color', `rgba(0, 0, 0, ${options.opacity})`, 'important');
    overlay.style.setProperty('display', 'none', 'important');

    document.body.appendChild(overlay);
    return overlay;
}

function initState(toggleBtn, overlay, options) {
    const isActive = localStorage.getItem('eyeProtectionActive') === 'true';
    if (isActive) {
        document.body.classList.add('eye-protection-active');
        overlay.style.setProperty('display', 'block', 'important');
        toggleBtn.style.setProperty('background-color', '#000', 'important');
        toggleBtn.style.setProperty('box-shadow', '0 0 20px 15px rgba(0, 0, 0, 1)', 'important');
    }
}

function setupEventListeners(toggleBtn, overlay, options) {
    // 增强的点击处理
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const isActive = document.body.classList.toggle('eye-protection-active');
        
        if (isActive) {
            overlay.style.setProperty('display', 'block', 'important');
            toggleBtn.style.setProperty('background-color', '#000', 'important');
            toggleBtn.style.setProperty('box-shadow', '0 0 20px 15px rgba(0, 0, 0, 1)', 'important');
            localStorage.setItem('eyeProtectionActive', 'true');
        } else {
            overlay.style.setProperty('display', 'none', 'important');
            toggleBtn.style.setProperty('background-color', '#333', 'important');
            toggleBtn.style.setProperty('box-shadow', '0 2px 12px 0 rgba(0, 0, 0, 0.2)', 'important');
            localStorage.setItem('eyeProtectionActive', 'false');
        }
    };

    // 使用捕获阶段确保触发
    toggleBtn.addEventListener('click', handleClick, true);

    // 增强的悬停效果
    toggleBtn.addEventListener('mouseenter', () => {
        if (!document.body.classList.contains('eye-protection-active')) {
            toggleBtn.style.setProperty('background-color', '#555', 'important');
        }
    });

    toggleBtn.addEventListener('mouseleave', () => {
        if (!document.body.classList.contains('eye-protection-active')) {
            toggleBtn.style.setProperty('background-color', '#333', 'important');
        }
    });
}

/**
 * 销毁暗色护眼功能
 */
export function destroyEyeProtection() {
    const elements = [
        document.getElementById('eye-protection-toggle'),
        document.getElementById('eye-protection-overlay')
    ];

    elements.forEach(el => el && el.remove());
    document.body.classList.remove('eye-protection-active');
    localStorage.removeItem('eyeProtectionActive');
}