/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 定义数据模型(DTO类型也暂时放于此处，后续可按需进行拆分)
 */

/* 模拟数据 */

// 数据库实体类型（表结构）
export type BlogEntity = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;  // 数据库自动生成的字段
  };
  
  // 前端提交的数据类型（DTO）
  export type CreateBlogDTO = {
    title: string;    // 只需要这两个字段
    content: string;
  };
  
  // 前端需要的响应类型
  export type BlogResponse = {
    id: number;
    title: string;
    createdAt: string; // 前端通常用字符串日期
  };