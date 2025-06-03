/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog 路由
 */

import { Router } from 'express';
import { blogController } from '../controller/index';
import { BlogResponse, CreateBlogRequest } from './../types/index';

const router = Router();

/* 路由挂载开始 */
// 2. 使用明确类型
// url:http://localhost:8080/blog
// 请求体：{"title":1, "content":1}
router.post<{}, BlogResponse, CreateBlogRequest>(
  '/',
  (req, res) => {
    // 现在 req.body 有类型提示了！
    const { title, content } = req.body;
    
    // 模拟创建博客
    const newBlog = {
      id: 1,
      title,
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json(newBlog);
  }
);

// 3. 带参数的路由
// url:http://localhost:8080/blog/123
// router.get<{ id: string }>('/:id', (req, res) => {
//   // req.params.id 现在是 string 类型
//   console.log('接收到请求');
  
//   res.send(`获取ID为 ${req.params.id} 的博客`);
// });

// url:http://localhost:8080/blog/demo?p1=1&p2=2
router.get<{}>('/demo', async (req, res)=>{
  return await blogController.getBlogByPage(req, res)
})
/* 路由挂载结束 */

export default router;