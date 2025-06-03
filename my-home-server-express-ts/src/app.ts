import express, { Request, Response } from 'express';
import router from './routes/index';

const app = express()
const port: number = 8080

// ⭐️ 必须添加的中间件（用于解析POST请求体）⭐️
app.use(express.json());       // 解析 application/json
app.use(express.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded

/* 路由挂载开始 */
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World with Express and TypeScript!')
})
app.use('/blog', router)
/* 路由挂载结束 */

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
