/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog类型声明
 */

/* blog类型声明开始 */
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
/* blog类型声明结束 */