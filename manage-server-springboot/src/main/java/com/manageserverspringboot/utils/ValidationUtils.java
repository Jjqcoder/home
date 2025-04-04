package com.manageserverspringboot.utils;

import cn.hutool.core.util.ReUtil;

/**
* @author Jiangjianqing
* @date 2024/10/27 12:10
* @description 工具类
*/
public class ValidationUtils {

//    用户名与密码只允许包含字母、数字、下划线，并且长度不为空且长度为5~9的字符串
    public static Boolean isUsernameAndPasswordValid(String username) {
        String pattern = "^[a-zA-Z0-9_]{5,9}$";
        return ReUtil.isMatch(pattern, username);
    }
}
