/**
 * 创建时间: 2025-06-05
 * 作者: jjq
 * 描述: 用于项目启动之后打印相关信息：如版本、当前实践等等方便调试
 */

export const startInfo = async () => {
    let packageJson = await import('../../../package.json');
    /* 朴素版开始 */
    // console.log('===================');
    // console.log('项目启动');
    // console.log('当前时间为：' + new Date().toLocaleString());
    // console.log('当前版本为：' + packageJson.version);
    // console.log('===================');
    /* 朴素版结束 */

    /* 带样式版开始 */
    console.group('%c项目启动信息', 'color: #4CAF50; font-weight: bold');
    console.log(`(●'◡'●)`);
    console.log('%c当前时间为：', 'color: #2196F3;', new Date().toLocaleString());
    console.log('%c当前版本为：', 'color: #2196F3;', packageJson.version);
    console.log(`(●'◡'●)`);
    console.groupEnd();
    /* 带样式版结束 */
}