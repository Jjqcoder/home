/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 自定义文字选中效果
 */

export function enableCustomSelectionStyle() {
    // 创建一个 style 元素
    const styleElement = document.createElement('style');
    
    // 设置选中效果的 CSS 规则
    styleElement.textContent = `
        ::selection {
            color: rgb(255, 0, 0); /* 字体颜色 */
            background-color: rgb(254, 213, 162); /* 背景颜色 */
            text-decoration: wavy underline; /* 波浪线 */
        }
    `;
    
    // 将样式元素添加到文档头部
    document.head.appendChild(styleElement);
    
    // 返回创建的样式元素引用，以便后续可以移除样式
    return styleElement;
}

// 调用示例
// const selectionStyle = enableCustomSelectionStyle();