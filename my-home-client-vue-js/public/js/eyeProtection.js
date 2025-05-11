// 初始化时检查LocalStorage中的设置
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body
    const toggleButton = document.getElementById('eye-protection-toggle')
    const savedMode = localStorage.getItem('eyeProtectionMode')

    if (savedMode === 'active') {
        // 应用保存的护眼模式
        body.classList.add('eye-protection-active')
        const overlay = document.createElement('div')
        overlay.className = 'eye-protection-mode'
        document.body.appendChild(overlay)
        toggleButton.textContent = '关闭护眼'
    }
})

// 护眼模式控制逻辑
document.getElementById('eye-protection-toggle').addEventListener('click', function () {
    const body = document.body
    const isActive = body.classList.contains('eye-protection-active')

    if (isActive) {
        // 关闭护眼模式
        body.classList.remove('eye-protection-active')
        const overlay = document.querySelector('.eye-protection-mode')
        if (overlay) overlay.remove()
        localStorage.setItem('eyeProtectionMode', 'inactive')
        this.textContent = '暗色护眼'
    } else {
        // 开启护眼模式
        body.classList.add('eye-protection-active')
        const overlay = document.createElement('div')
        overlay.className = 'eye-protection-mode'
        document.body.appendChild(overlay)
        localStorage.setItem('eyeProtectionMode', 'active')
        this.textContent = '关闭护眼'
    }
})
