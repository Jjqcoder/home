/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: blog 实体类
 */

export interface Blog {
    ID: number;
    BLOG_CREATE_TIME?: Date | null;
    BLOG_UPDATE_TIME?: Date | null;
    BLOG_TITLE?: string | null;
    BLOG_CONTENT?: string | null;
    IS_DELETE?: string | null;
    BLOG_TAGS?: string | null;
}