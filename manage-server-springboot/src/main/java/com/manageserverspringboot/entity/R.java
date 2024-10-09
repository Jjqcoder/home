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

    public R(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public static <T> R<T> success(String message, T data) {
        return new R<>(200, message, data);
    }

    public static <T> R<T> error(String message, T data) {
        return new R<>(400, message, data);
    }

}
