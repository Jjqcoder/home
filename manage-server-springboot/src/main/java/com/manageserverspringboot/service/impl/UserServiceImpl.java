package com.manageserverspringboot.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

//    注入依赖
    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> getAllUsers() {
        return userMapper.selectList(null);
    }

//    获取指定username的用户信息
    @Override
    public User getUserById(String username) {
        QueryWrapper<User> queryWrapper = Wrappers.query();
        queryWrapper.eq("username", username);

        // 使用selectList是为了兼容多个用户名这种异常情况
        List<User> userList = userMapper.selectList(queryWrapper);

        if (userList.size() == 1) {
            return userList.get(0);
        } else {
            return null;
        }

    }

    // 根据用户名和密码插入用户数据
    @Override
    public Boolean insertUserByUsernameAndPassword(String username, String password) {
        User user = new User(username, password);
        int insert = userMapper.insert(user);// 影响的行数
        if (insert == 1) {
            return true;// 插入成功
        } else {
            return false;// 插入失败
        }
    }

    @Override
    public Boolean login(String username, String password) {
        QueryWrapper<User> queryWrapper = Wrappers.query();

        queryWrapper.eq("username", username);
        queryWrapper.eq("password", password);

        List<User> userList = userMapper.selectList(queryWrapper);

        if (userList.size() == 1) {
            return true;// 成功
        }
        return false;// 失败:可能是不存在该用户 也可能存在多个 即错误
    }
}
