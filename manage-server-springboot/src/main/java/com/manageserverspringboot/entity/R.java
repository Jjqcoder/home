package com.manageserverspringboot.entity;

import java.io.Serializable;

/**
* @author Jiangjianqing
* @date 2024/10/9 0:47
* @description 结果类
*/
public class R<T> implements Serializable {

    // 用于版本控制
    private static final long serialVersionUID = 1L;

    // 状态码，通常使用HTTP状态码
    // 成功200 错误400
    private int code;

    // 消息提示
    private String message;

    // 数据内容
    private T data;

    // 默认构造函数
    public R() {
    }

    // 带参数的构造函数
    public R(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    // 静态方法，用于生成成功的响应
    public static <T> R<T> success(T data) {
        return new R<>(200, "Success", data);
    }

    // 静态方法，用于生成成功的响应（无数据）
    public static <T> R<T> success() {
        return new R<>(200, "Success", null);
    }

    // 静态方法，用于生成失败的响应
    public static <T> R<T> error(int code, String message) {
        return new R<>(code, message, null);
    }

    // Getter 和 Setter 方法
    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Result{" +
                "code=" + code +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
