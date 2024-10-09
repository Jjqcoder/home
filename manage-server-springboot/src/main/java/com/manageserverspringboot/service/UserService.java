package com.manageserverspringboot.service;

import com.manageserverspringboot.entity.User;

import java.util.List;

public interface UserService {

//    获取全部的用户信息
    List<User> getAllUsers();

//    获取指定username的用户信息
    User getUserById(String username);

    //   根据用户名和密码插入用户数据
    Boolean insertUserByUsernameAndPassword(String username, String password);

    // 判断用户名和密码是否正确
    Boolean login(String username, String password);
}
