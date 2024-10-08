package com.manageserverspringboot.service;

import com.manageserverspringboot.entity.User;

import java.util.List;

public interface UserService {

//    获取全部的用户信息
    List<User> getAllUsers();
}
