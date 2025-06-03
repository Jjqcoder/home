/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog类型声明
 */

/* blog类型声明开始 */
// blog实体类
export interface Blog {
  ID: number;
  BLOG_CREATE_TIME?: Date | null;
  BLOG_UPDATE_TIME?: Date | null;
  BLOG_TITLE?: string | null;
  BLOG_CONTENT?: string | null;
  IS_DELETE?: string | null;
  BLOG_TAGS?: string | null;
}
// 分页获取博客数据控制层入参
export interface BlogPageQuery {
  current?: string;
  size?: string;
}
// 分页获取博客数据service返回值类型
export interface BlogPaginationResult {
  total: number;
  current: number;
  size: number;
  records: Blog[];
}

/* blog类型声明结束 */