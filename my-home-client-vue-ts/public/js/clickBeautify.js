/* ==========点击事件美化开始========== */
/**
 * 添加美观的点击特效
 * @param {Object} options 配置选项
 * @param {number} [options.particleCount=25] 粒子数量
 * @param {string[]} [options.colors=['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC']] 粒子颜色数组
 * @param {number} [options.particleSizeMin=6] 粒子最小大小(px)
 * @param {number} [options.particleSizeMax=12] 粒子最大大小(px)
 * @param {number} [options.particleSpeed=8] 粒子基础速度
 * @param {string} [options.rippleColor='rgba(100, 200, 255, 0.6)'] 涟漪效果颜色
 * @param {number} [options.trailDensity=0.3] 拖尾粒子密度(0-1)
 */
function addClickEffects(options = {}) {
    // 合并配置
    const config = {
        particleCount: options.particleCount || 25,
        colors: options.colors || ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC'],
        particleSizeMin: options.particleSizeMin || 6,
        particleSizeMax: options.particleSizeMax || 12,
        particleSpeed: options.particleSpeed || 8,
        rippleColor: options.rippleColor || 'rgba(100, 200, 255, 0.6)',
        trailDensity: options.trailDensity || 0.3,
        ...options
    }

    // 创建粒子元素
    function createParticle(x, y, color, size, angle, speedMultiplier = 1) {
        const particle = document.createElement('div')
        const sizeValue = size || config.particleSizeMin + Math.random() * (config.particleSizeMax - config.particleSizeMin)

        particle.style.position = 'fixed'
        particle.style.width = `${sizeValue}px`
        particle.style.height = `${sizeValue}px`
        particle.style.borderRadius = '50%'
        particle.style.backgroundColor = color || config.colors[Math.floor(Math.random() * config.colors.length)]
        particle.style.left = `${x}px`
        particle.style.top = `${y}px`
        particle.style.pointerEvents = 'none'
        particle.style.zIndex = '9999'
        particle.style.transform = 'translate(-50%, -50%)'
        particle.style.boxShadow = '0 0 5px 1px rgba(255,255,255,0.5)'

        document.body.appendChild(particle)
        return particle
    }

    // 粒子爆炸效果
    function createParticleExplosion(x, y) {
        for (let i = 0; i < config.particleCount; i++) {
            const angle = Math.random() * Math.PI * 2
            const speed = config.particleSpeed * (0.7 + Math.random() * 0.6)
            const size = config.particleSizeMin + Math.random() * (config.particleSizeMax - config.particleSizeMin)
            const color = config.colors[Math.floor(Math.random() * config.colors.length)]
            const lifetime = 1000 + Math.random() * 500 // 1-1.5秒

            const particle = createParticle(x, y, color, size)

            // 添加发光效果
            particle.style.filter = `blur(${Math.random() * 2}px)`

            // 动画
            const startTime = Date.now()
            const xVelocity = Math.cos(angle) * speed
            const yVelocity = Math.sin(angle) * speed
            const rotationSpeed = (Math.random() - 0.5) * 20
            let rotation = 0

            function animate() {
                const elapsed = Date.now() - startTime
                const progress = elapsed / lifetime

                if (progress >= 1) {
                    particle.remove()
                    return
                }

                // 抛物线运动
                const xPos = x + xVelocity * elapsed * 0.03
                const yPos = y + yVelocity * elapsed * 0.03 + (elapsed * 0.01) ** 2 * 0.5

                // 旋转和淡出
                rotation += rotationSpeed
                const scale = 1 - progress * 0.5
                const opacity = 1 - progress

                particle.style.left = `${xPos}px`
                particle.style.top = `${yPos}px`
                particle.style.opacity = opacity
                particle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`

                requestAnimationFrame(animate)
            }

            animate()
        }
    }

    // 涟漪效果
    function createRippleEffect(x, y) {
        const ripple = document.createElement('div')
        ripple.style.position = 'fixed'
        ripple.style.width = '10px'
        ripple.style.height = '10px'
        ripple.style.borderRadius = '50%'
        ripple.style.border = `2px solid ${config.rippleColor}`
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
        ripple.style.pointerEvents = 'none'
        ripple.style.zIndex = '9998'
        ripple.style.transform = 'translate(-50%, -50%)'
        ripple.style.boxShadow = `0 0 10px ${config.rippleColor}`

        document.body.appendChild(ripple)

        let size = 10
        let opacity = 1
        const duration = 800 // 0.8秒

        function animate() {
            size += 20
            opacity -= 0.02

            if (opacity <= 0) {
                ripple.remove()
                return
            }

            ripple.style.width = `${size}px`
            ripple.style.height = `${size}px`
            ripple.style.opacity = opacity
            ripple.style.borderWidth = `${2 + size * 0.02}px`

            requestAnimationFrame(animate)
        }

        animate()
    }

    // 鼠标拖尾效果
    let lastPoints = []
    const maxTrailPoints = 8

    document.addEventListener('mousemove', e => {
        // 记录鼠标位置
        lastPoints.push({x: e.clientX, y: e.clientY, time: Date.now()})
        if (lastPoints.length > maxTrailPoints) {
            lastPoints.shift()
        }

        // 创建拖尾粒子
        if (Math.random() < config.trailDensity && lastPoints.length > 2) {
            const point = lastPoints[0]
            const elapsed = Date.now() - point.time
            if (elapsed > 50) return // 只对较新的点添加拖尾

            const size = config.particleSizeMin * 0.7 + Math.random() * (config.particleSizeMax * 0.7 - config.particleSizeMin * 0.7)
            const color = config.colors[Math.floor(Math.random() * config.colors.length)]
            const particle = createParticle(point.x, point.y, color, size)

            // 拖尾粒子动画
            let opacity = 0.6
            const lifetime = 300 + Math.random() * 300 // 0.3-0.6秒
            const startTime = Date.now()

            function animate() {
                const elapsed = Date.now() - startTime
                const progress = elapsed / lifetime

                if (progress >= 1) {
                    particle.remove()
                    return
                }

                opacity = 0.6 * (1 - progress)
                const scale = 1 - progress * 0.5

                particle.style.opacity = opacity
                particle.style.transform = `translate(-50%, -50%) scale(${scale})`

                requestAnimationFrame(animate)
            }

            animate()
        }
    })

    // 点击事件
    document.addEventListener('click', e => {
        createParticleExplosion(e.clientX, e.clientY)
        // createRippleEffect(e.clientX, e.clientY) 取消涟漪效果
    })
}

// 使用
addClickEffects({
    colors: [
        '#FF5733',
        '#FFC371',
        '#FF70A6',
        '#7BED9F',
        '#33C1FF',
        '#8E44AD',
        '#FFD700',
        '#FF6347',
        '#90EE90',
        '#ADD8E6',
        '#FFB6C1',
        '#FFFF99',
        '#FF4500',
        '#87CEEB',
        '#FF69B4',
        '#FFDAB9',
        '#FF1493',
        '#FF8C00',
        '#FFA07A',
        '#FFB90F'
    ],
    particleCount: 5,
    trailDensity: 0.4
})
/* ==========点击事件美化结束========== */
