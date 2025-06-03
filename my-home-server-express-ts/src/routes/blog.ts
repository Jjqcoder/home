/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog 路由
 */

import { Router } from 'express';
import { blogController } from '../controller/index';
import {PaginateBlogDto} from '../types'

const router = Router();

/* 路由挂载开始 */
// url:http://localhost:8080/blog/getBlogByPage?current=1&size=5
router.get<{},{},{},PaginateBlogDto>('/getBlogByPage', blogController.getBlogByPage)// 分页获取blog
/* 路由挂载结束 */

export default router;