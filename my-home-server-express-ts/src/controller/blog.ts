/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog 控制层
 */

import { Request, Response } from 'express';
import { R } from '../lib/R';
import { blogService } from '../service/index';
import { BlogPageQuery } from '../types/index';

export const blogController = class {
    static async getBlogByPage(
        req: Request<{}, {}, {}, BlogPageQuery>, 
        res: Response
    ): Promise<void> {
        try {
            /* 入参校验开始 */    
            let current = req.query.current
            let size = req.query.size
            /* 入参校验结束 */           
            res.send(R.ok(200, '博客数据分页获取成功', await blogService.getBlogByPage(Number(current), Number(size)))) 
        } catch (error) {
            res.send(R.err(500, '博客数据分页获取失败', error)) 
        }
    }
}