/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 使用模块模式进行封装
 */

import { get } from './internal/http.js';
export const blogApi = {
    // 分页获取博客
    getBlogByPage: async (current, size) => {
        return await get(
            `/blog/getBlogByPage`,
             {current,size}
            )
    },
    // 获取全部的博客TAG
    getAllTag: async () => {
        return await get(
            `/blog/getAllTag`,
            )
    },
    // 分页且根据标签获取博客
    getBlogByPageAndTag: async (current, size, tags) => {
        return await get(
            `/blog/getBlogByPageAndTag`,
            {current,size,tags}
            )
    },
}