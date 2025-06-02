/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 使用模块模式进行封装
 */

import { get } from '../utils/api/index.js';
export const blogApi = {
    // 分页获取博客
    getBlogByPage: async (current, size) => {
        console.log('我被执行了!!');
        return await get(
            `/blog/getBlogByPage`,
             {current,size}
            )
    }
}