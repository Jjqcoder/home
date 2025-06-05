/**
 * 创建时间: 2025-06-05
 * 作者: jjq
 * 描述: 用于项目启动之后打印相关信息：如版本、当前实践等等方便调试
 */

export const startInfo = async () => {
    let packageJson = await import('../../../package.json');
    console.log('===================');
    console.log('项目启动');
    console.log('当前时间为：' + new Date().toLocaleString());
    console.log('当前版本为：' + packageJson.version);
    console.log('===================');
}