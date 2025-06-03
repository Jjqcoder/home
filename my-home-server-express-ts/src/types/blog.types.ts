/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog类型声明
 */
export type Blog = {
  id: number;
  title: string;
  content: string;
}

export type CreateBlogRequest = {
  title: string;
  content: string;
};

export type BlogResponse = {
  id: number;
  title: string;
  createdAt: string;
};