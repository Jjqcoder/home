package com.manageserverspringboot.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
* @author Jiangjianqing
* @date 2024/10/8 20:39
* @description 用户类
*/

@Data // getter setter
@AllArgsConstructor // 全参数构造器
@NoArgsConstructor// 无参构造
@TableName("users")
public class User {
/**
* @author Jiangjianqing
* @date 2024/10/11 20:28
* @description 如果一个类中没有定义任何构造器，Java编译器会自动提供一个无参的默认构造器。
 * 但是，一旦你在类中定义了任何构造器（无论是全参的还是带部分参数的），编译器就不会再自动提供这个默认的无参构造器。
*/
    // 用户名
    String username;
    // 密码
    String password;

}
