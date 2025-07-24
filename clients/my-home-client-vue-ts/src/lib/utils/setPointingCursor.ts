/**
 * 创建时间: 2025-06-18
 * 作者: jjq
 * 描述: 美化鼠标样式，将默认光标替换为手指向上👆的SVG图标
 */

/**
 * 设置指向性光标样式
 * 1. 创建一个style元素，定义所有带有data-cursor属性的元素使用自定义光标
 * 2. 递归为DOM中所有元素添加data-cursor属性
 * 3. 使用MutationObserver监听DOM变化，为动态添加的元素自动添加data-cursor属性
 */
export function setPointingCursor(): void {
  // 创建并添加样式
  const style: HTMLStyleElement = document.createElement('style');
  style.textContent = `
    [data-cursor] {
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><text x='20' y='35' font-size='30' text-anchor='middle'>👆</text></svg>") 20 10, auto !important;
    }
  `;
  document.head.appendChild(style);
  
  /**
   * 递归为元素及其子元素添加data-cursor属性
   * @param element 要添加属性的DOM元素
   */
  const addCursorAttr = (element: Element): void => {
      element.setAttribute('data-cursor', '');
      Array.from(element.children).forEach(addCursorAttr);
  };
  
  // 初始处理整个body
  addCursorAttr(document.body);
  
  // 配置MutationObserver回调来处理动态添加的元素
  const observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
          mutation.addedNodes.forEach((node: Node) => {
              if (node.nodeType === Node.ELEMENT_NODE) { // 元素节点
                  addCursorAttr(node as Element);
              }
          });
      });
  });
  
  // 开始观察DOM变化
  observer.observe(document.body, {
      childList: true,
      subtree: true,
  });
}