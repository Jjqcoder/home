/**
 * 创建时间: 2025-06-03
 * 作者: jjq
 * 描述: 结果类
 */

/**
 * 统一响应结果封装类
 * @template T 数据类型泛型
 */
export class R<T = any> {
    public code: number;
    public msg: string | null;
    public data: T | null;
  
    /**
     * 构造函数
     * @param code 状态码
     * @param msg 提示信息 (可选，默认为null)
     * @param data 返回数据 (可选，默认为null)
     */
    constructor(code: number, msg: string | null = null, data: T | null = null) {
      this.code = code;
      this.msg = msg;
      this.data = data;
    }
  
    /**
     * 成功响应
     * @param data 返回数据 (可选)
     * @param msg 提示信息 (可选)
     * @param code 状态码 (可选，默认200)
     */
    static ok<T>(code: number = 200, msg: string | null = 'success', data: T | null = null): R<T> {
      return new R<T>(code, msg, data);
    }
  
    /**
     * 错误响应
     * @param msg 错误信息
     * @param code 错误码 (可选，默认500)
     * @param data 附加数据 (可选)
     */
    static err<T>(code: number = 500, msg: string, data: T | null = null): R<T> {
      return new R<T>(code, msg, data);
    }
}