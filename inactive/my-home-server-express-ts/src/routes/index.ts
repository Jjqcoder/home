/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 路由入口文件
 */

import { Router } from 'express';
import blogRouter from './blog';

const router = Router();

/* 路由挂载开始 */
router.use(blogRouter)
/* 路由挂载结束 */


export default router;