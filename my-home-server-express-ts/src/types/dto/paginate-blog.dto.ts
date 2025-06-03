/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 分页获取blog数据的入参类型
 */

export interface PaginateBlogDto {
    current: string | number,
    size:string | number
}