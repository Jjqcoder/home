/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 分页获取博客数据的结果的类型
 */
import { Blog } from '../entities/blog-entity';

export interface BlogPaginationResult {
    total: number;
    current: number;
    size: number;
    records: Blog[];
}
