import express, { Request, Response } from 'express';
import router from './routes/index';

const app = express()
const port: number = 8080

/* 挂载中间件开始 */
app.use(express.json());       // 解析 application/json
app.use(express.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded
/* 挂载中间件结束 */

/* 项目入口的路由挂载开始 */
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World with Express and TypeScript!')
})
app.use('/blog', router)
/* 项目入口的路由挂载结束 */

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
