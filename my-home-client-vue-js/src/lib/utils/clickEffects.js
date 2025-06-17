/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 美化点击效果
 */

export class ClickEffects {
    constructor(options = {}) {
        // 合并配置
        this.config = {
            particleCount: options.particleCount || 25,
            colors: options.colors || ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC'],
            particleSizeMin: options.particleSizeMin || 6,
            particleSizeMax: options.particleSizeMax || 12,
            particleSpeed: options.particleSpeed || 8,
            rippleColor: options.rippleColor || 'rgba(100, 200, 255, 0.6)',
            trailDensity: options.trailDensity || 0.3,
            enableRipple: options.enableRipple !== undefined ? options.enableRipple : true,
            enableTrail: options.enableTrail !== undefined ? options.enableTrail : true,
            ...options
        };
        
        // 鼠标拖尾点记录
        this.lastPoints = [];
        this.maxTrailPoints = 8;
        
        // 绑定事件处理函数上下文
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        // 初始化
        this.init();
    }
    
    // 初始化方法
    init() {
        if (this.config.enableTrail) {
            document.addEventListener('mousemove', this.handleMouseMove);
        }
        
        document.addEventListener('click', this.handleClick);
    }
    
    // 创建粒子元素
    createParticle(x, y, color, size, angle, speedMultiplier = 1) {
        const particle = document.createElement('div');
        const sizeValue = size || this.config.particleSizeMin + Math.random() * (this.config.particleSizeMax - this.config.particleSizeMin);

        particle.style.position = 'fixed';
        particle.style.width = `${sizeValue}px`;
        particle.style.height = `${sizeValue}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color || this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.transform = 'translate(-50%, -50%)';
        particle.style.boxShadow = '0 0 5px 1px rgba(255,255,255,0.5)';

        document.body.appendChild(particle);
        return particle;
    }

    // 粒子爆炸效果
    createParticleExplosion(x, y) {
        for (let i = 0; i < this.config.particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = this.config.particleSpeed * (0.7 + Math.random() * 0.6);
            const size = this.config.particleSizeMin + Math.random() * (this.config.particleSizeMax - this.config.particleSizeMin);
            const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
            const lifetime = 1000 + Math.random() * 500; // 1-1.5秒

            const particle = this.createParticle(x, y, color, size);

            // 添加发光效果
            particle.style.filter = `blur(${Math.random() * 2}px)`;

            // 动画
            const startTime = Date.now();
            const xVelocity = Math.cos(angle) * speed;
            const yVelocity = Math.sin(angle) * speed;
            const rotationSpeed = (Math.random() - 0.5) * 20;
            let rotation = 0;

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / lifetime;

                if (progress >= 1) {
                    particle.remove();
                    return;
                }

                // 抛物线运动
                const xPos = x + xVelocity * elapsed * 0.03;
                const yPos = y + yVelocity * elapsed * 0.03 + (elapsed * 0.01) ** 2 * 0.5;

                // 旋转和淡出
                rotation += rotationSpeed;
                const scale = 1 - progress * 0.5;
                const opacity = 1 - progress;

                particle.style.left = `${xPos}px`;
                particle.style.top = `${yPos}px`;
                particle.style.opacity = opacity;
                particle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;

                requestAnimationFrame(animate);
            };

            animate();
        }
    }

    // 涟漪效果
    createRippleEffect(x, y) {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.borderRadius = '50%';
        ripple.style.border = `2px solid ${this.config.rippleColor}`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9998';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.boxShadow = `0 0 10px ${this.config.rippleColor}`;

        document.body.appendChild(ripple);

        let size = 10;
        let opacity = 1;
        const duration = 800; // 0.8秒

        const animate = () => {
            size += 20;
            opacity -= 0.02;

            if (opacity <= 0) {
                ripple.remove();
                return;
            }

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.opacity = opacity;
            ripple.style.borderWidth = `${2 + size * 0.02}px`;

            requestAnimationFrame(animate);
        };

        animate();
    }

    // 鼠标拖尾效果
    handleMouseMove(e) {
        // 记录鼠标位置
        this.lastPoints.push({x: e.clientX, y: e.clientY, time: Date.now()});
        if (this.lastPoints.length > this.maxTrailPoints) {
            this.lastPoints.shift();
        }

        // 创建拖尾粒子
        if (Math.random() < this.config.trailDensity && this.lastPoints.length > 2) {
            const point = this.lastPoints[0];
            const elapsed = Date.now() - point.time;
            if (elapsed > 50) return; // 只对较新的点添加拖尾

            const size = this.config.particleSizeMin * 0.7 + Math.random() * (this.config.particleSizeMax * 0.7 - this.config.particleSizeMin * 0.7);
            const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
            const particle = this.createParticle(point.x, point.y, color, size);

            // 拖尾粒子动画
            let opacity = 0.6;
            const lifetime = 300 + Math.random() * 300; // 0.3-0.6秒
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / lifetime;

                if (progress >= 1) {
                    particle.remove();
                    return;
                }

                opacity = 0.6 * (1 - progress);
                const scale = 1 - progress * 0.5;

                particle.style.opacity = opacity;
                particle.style.transform = `translate(-50%, -50%) scale(${scale})`;

                requestAnimationFrame(animate);
            };

            animate();
        }
    }

    // 点击事件处理
    handleClick(e) {
        this.createParticleExplosion(e.clientX, e.clientY);
        if (this.config.enableRipple) {
            this.createRippleEffect(e.clientX, e.clientY);
        }
    }
    
    // 销毁方法 - 用于移除事件监听器和清理
    destroy() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('click', this.handleClick);
        
        // 移除所有由该实例创建的元素
        const elements = document.querySelectorAll('div');
        elements.forEach(el => {
            if (el.style.zIndex === '9999' || el.style.zIndex === '9998') {
                el.remove();
            }
        });
    }
}    