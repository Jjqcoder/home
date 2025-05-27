/**
 * 创建时间: 2025-05-27
 * 作者: jjq
 * 描述: 首页
 */
export default async function Home() {
    const res = await fetch('http://localhost:3000/api/hello', {
        cache: 'no-store' // 重要！
    })
    const data = await res.json()

    return (
        <div>
            <h1>我是首页</h1>
            <p>接口返回的数据如下：</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
