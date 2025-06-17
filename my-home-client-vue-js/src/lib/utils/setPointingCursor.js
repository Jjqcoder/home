/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 美化鼠标样式
 */

export function setPointingCursor() {
    const style = document.createElement('style');
    style.textContent = `
      [data-cursor] {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><text x='20' y='35' font-size='30' text-anchor='middle'>👆</text></svg>") 20 10, auto !important;
      }
    `;
    document.head.appendChild(style);
    
    // 递归为所有元素添加 data-cursor 属性
    function addCursorAttr(element) {
      element.setAttribute('data-cursor', '');
      Array.from(element.children).forEach(addCursorAttr);
    }
    
    addCursorAttr(document.body);
    
    // 监听DOM变化，为动态添加的元素也加上属性
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // 元素节点
            addCursorAttr(node);
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }