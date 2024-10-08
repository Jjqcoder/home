package com.manageserverspringboot.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
* @author Jiangjianqing
* @date 2024/10/8 20:39
* @description 用户类
*/

@Data // getter setter
@AllArgsConstructor // 全参数构造器
@TableName("users")
public class User {

    // 用户名
    String username;
    // 密码
    String password;

}
