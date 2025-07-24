<template>
    <div class="footer">
        <div class="footer-content">
            <span>👮备案号：<a href="https://beian.miit.gov.cn/#/Integrated/index">闽ICP备2023004666号</a></span>
            <span>Made on 🌏 by ❤️.</span>
        </div>
    </div>
</template>

<style scoped lang="less">
/* Footer container styles */
.footer {
    /* Full width and height */
    width: 100%;
    height: 100%;
    
    /* Text and background colors */
    color: rgb(75, 61, 1);  // Primary text color
    background-color: rgb(248, 234, 176);  // Light yellow background
    
    /* Font settings */
    font-size: 10px;  // Small font size
    
    /* Flexbox centering */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Footer content container - nested selector */
    &-content {/* It will become.footer-content after compilation */
        /* Flex column layout */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;  // Spacing between child elements
    }
}

/* Link styles reset */
a {
    /* Remove default link styling */
    text-decoration: none;  // No underline
    color: inherit;  // Inherit text color from parent
    
    /* States - hover, active, focus */
    &:hover,
    &:active,
    &:focus {
        text-decoration: none;  // Maintain no underline in all states
    }
}
</style>