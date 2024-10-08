package com.manageserverspringboot.service.impl;

import com.manageserverspringboot.entity.User;
import com.manageserverspringboot.mapper.UserMapper;
import com.manageserverspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author Jiangjianqing
* @date 2024/10/8 21:15
* @description 用户服务层
*/

@Service
public class UserServiceImpl implements UserService {

//    注入依赖
    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> getAllUsers() {
        return userMapper.selectList(null);
    }
}
