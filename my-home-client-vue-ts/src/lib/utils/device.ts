/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 设备相关工具函数
 */

// 判断当前是手机端还是电脑端
export function isMobileDevice(): boolean {
    // 获取浏览器的用户代理字符串，并转换为小写
    const userAgent: string = navigator.userAgent.toLowerCase();
    // 定义一些常见的手机端用户代理关键词
    const mobileKeywords: string[] = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone', 'mobile', 'touch', 'tablet'];

    // 检查用户代理字符串中是否包含上述关键词之一
    return mobileKeywords.some((keyword: string) => userAgent.includes(keyword));
}

// 使用示例
// if (isMobileDevice()) {
//   console.log("当前是手机端");
// } else {
//   console.log("当前是电脑端");
// }