/**
 * 创建时间: 2025-06-05
 * 作者: jjq
 * 描述: 用于项目启动之后打印相关信息：如版本、当前时间等等方便调试
 */

// 定义 package.json 的类型接口
interface PackageJson {
    version: string;
}

export const startInfo = async () => {
    // 异步导入 package.json 文件，获取项目版本信息
    const packageJson: PackageJson = await import('../../../package.json');

    // 原始朴素版日志打印，使用 console.log 直接输出信息
    /* 朴素版开始 */
    // console.log('===================');
    // console.log('项目启动');
    // console.log('当前时间为：' + new Date().toLocaleString());
    // console.log('当前版本为：' + packageJson.version);
    // console.log('===================');
    /* 朴素版结束 */

    // 带样式的日志打印，使用 console.group 和 console.log 的样式参数来美化输出
    /* 带样式版开始 */
    // 使用 console.group 开始一个分组，并设置分组标题的样式
    console.group('%c项目启动信息', 'color: #4CAF50; font-weight: bold');
    // 打印一个可爱的笑脸符号
    console.log(`(●'◡'●)`);
    // 打印当前时间，设置时间的样式
    console.log('%c当前时间为：', 'color: #2196F3;', new Date().toLocaleString());
    // 打印当前版本，设置版本的样式
    console.log('%c当前版本为：', 'color: #2196F3;', packageJson.version);
    // 再次打印一个笑脸符号
    console.log(`(●'◡'●)`);
    // 结束分组
    console.groupEnd();
    /* 带样式版结束 */
}