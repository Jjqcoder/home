package com.manageserverspringboot.entity;

import lombok.Data;

import java.io.Serializable;

/**
* @author Jiangjianqing
* @date 2024/10/9 0:47
* @description 结果类
*/
@Data
public class R<T> implements Serializable {

    private static final long serialVersionUID = 1L;// 用于版本控制
    private int code;// 状态码，通常使用HTTP状态码 成功200 错误400
    private String message;// 消息提示
    private T data;// 数据内容

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

    // 静态方法，用于生成成功的响应（有消息，有数据）
    public static <T> R<T> success(String message, T data) {
        return new R<>(200, message, data);
    }

    // 静态方法，用于生成失败的响应
    public static <T> R<T> error(int code, String message) {
        return new R<>(code, message, null);
    }

}
