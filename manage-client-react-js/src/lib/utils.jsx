/**
 * 创建时间: 2025-06-15
 * 作者: jjq
 * 描述: 存放工具函数
 */

// 检查字符串是否合法
export const isStringValid = (str) => {
    // 检查字符串是否为空
    if (!str || str.trim() === '') {
        return false;
    }
    // 检查字符串长度是否超过限制
    if (str.length > 15 || str.length < 6) {
        return false;
    }
    // 检查字符串是否包含特殊字符
    const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if (specialChars.test(str)) {
        return false;
    }
    // 检查字符串是否包含中文字符
    const chineseChars = /[\u4e00-\u9fa5]/;
    if (chineseChars.test(str)) {
        return false;
    }
    // 所有检查通过，字符串合法
    return true;
}
