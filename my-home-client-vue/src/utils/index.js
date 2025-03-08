// 判断当前是手机端还是电脑端
export function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = [
        "android",
        "iphone",
        "ipad",
        "ipod",
        "blackberry",
        "windows phone",
        "mobile",
        "touch",
        "tablet"
    ];

    return mobileKeywords.some(keyword => userAgent.includes(keyword));
}
// 使用示例
// if (isMobileDevice()) {
//   console.log("当前是手机端");
// } else {
//   console.log("当前是电脑端");
// }