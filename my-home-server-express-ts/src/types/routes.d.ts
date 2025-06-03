/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 定义路由需要的请求体和响应类型
 */
  
/* 模拟数据 */
export type CreateBlogRequest = {
    title: string;
    content: string;
  };
  
export type BlogResponse = {
    success: boolean;
    data?: Blog;
    error?: string;
};