// 入场动画控制
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen')
    let isAnimationDone = false

    // 隐藏滚动条
    document.body.style.overflow = 'hidden'

    // 首次点击处理
    function handleFirstClick() {
        if (!isAnimationDone) {
            loadingScreen.classList.add('hide')
            setTimeout(() => {
                loadingScreen.remove()
                isAnimationDone = true
                // 恢复滚动条
                document.body.style.overflow = 'auto'
                // 显示暗色模式按钮
                document.getElementById('eye-protection-toggle').style.display = 'block'
            }, 1000)
            document.removeEventListener('click', handleFirstClick)
        }
    }

    // 等待1秒后允许滚动关闭
    setTimeout(() => {
        // window.addEventListener('wheel', handleFirstScroll, {passive: false})
        document.addEventListener('click', handleFirstClick)
    }, 1000)
})
