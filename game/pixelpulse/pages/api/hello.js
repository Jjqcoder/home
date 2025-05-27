/**
 * 创建时间: 2025-05-27
 * 作者: jjq
 * 描述: 路由
 */

export default function handler(req, res) {
    // 打印日志确认路由被调用
    console.log('✅ API 路由被访问', new Date().toISOString())

    // 设置响应头
    res.setHeader('Cache-Control', 'no-store')

    // 返回数据
    res.status(200).json({
        text: 'Hello World',
        status: 'working',
        timestamp: new Date().toISOString()
    })
}
