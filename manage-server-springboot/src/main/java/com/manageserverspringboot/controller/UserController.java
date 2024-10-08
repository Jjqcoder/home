package com.manageserverspringboot.controller;

import com.manageserverspringboot.entity.R;
import com.manageserverspringboot.entity.User;
import com.manageserverspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    // 依赖注入
    @Autowired
    private UserService userService;

//    功能:获取全部的用户信息
//    url示例:http://localhost:8090/getAllUser
    @GetMapping("/getAllUser")
    public R getAllUser() {
        return R.success(userService.getAllUsers());
    }
}
