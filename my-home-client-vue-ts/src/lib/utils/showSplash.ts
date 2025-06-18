/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 此文件用于开场显示图片 (纯JS版本)
 */

export const showSplash = (imageUrl, text, glowColor = 'rgba(218, 165, 32, 0.8)', zIndex = 10001) => {
    return new Promise((resolve) => {
        // 创建样式
        const style = document.createElement('style');
        style.textContent = `
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
        document.head.appendChild(style);
  
        // 创建容器
        const splashDiv = document.createElement('div');
        splashDiv.id = 'splash-container';
  
        // 创建图片容器
        const imageContainer = document.createElement('div');
        imageContainer.className = 'splash-image-container';
  
        // 创建图片
        const img = document.createElement('img');
        img.className = 'splash-image';
        img.src = imageUrl;
  
        // 创建发光效果
        const glow = document.createElement('div');
        glow.className = 'splash-glow';
  
        // 组装图片部分
        imageContainer.appendChild(img);
        imageContainer.appendChild(glow);
        splashDiv.appendChild(imageContainer);
  
        // 创建文字（如果有）
        if (text) {
            const textDiv = document.createElement('div');
            textDiv.className = 'splash-text';
            textDiv.textContent = text;
            splashDiv.appendChild(textDiv);
        }
  
        // 添加到DOM
        document.body.appendChild(splashDiv);
  
        // 状态标记，防止重复移除
        let isClosing = false;
  
        // 点击事件处理函数
        const handleClick = () => {
            if (isClosing) return; // 如果正在关闭，直接返回
            isClosing = true;
  
            // 移除点击事件监听器，防止重复触发
            splashDiv.removeEventListener('click', handleClick);
  
            splashDiv.style.opacity = '0';
            setTimeout(() => {
                // 在移除前检查节点是否存在
                if (style.parentNode === document.head) {
                    document.head.removeChild(style);
                }
                if (splashDiv.parentNode === document.body) {
                    document.body.removeChild(splashDiv);
                }
                resolve();
            }, 500);
        };
  
        // 添加点击事件处理
        splashDiv.addEventListener('click', handleClick);
    });
  };