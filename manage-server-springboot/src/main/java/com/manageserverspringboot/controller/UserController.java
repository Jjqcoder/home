package com.manageserverspringboot.controller;

import com.manageserverspringboot.entity.R;
import com.manageserverspringboot.entity.User;
import com.manageserverspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    // 依赖注入
    @Autowired
    private UserService userService;

//    功能:获取全部的用户信息
//    url示例:http://localhost:8090/getAllUser
    @GetMapping("/getAllUser")
    public R getAllUser() {
        return R.success("成功获取全部的用户信息", userService.getAllUsers());
    }

//    功能:查询指定username的用户数据
//    url示例:http://localhost:8090/getUserById?username=jiang
    @GetMapping("/getUserById")
    public R getUserById(HttpServletRequest httpServletRequest) {
        Map<String, String[]> parameterMap = httpServletRequest.getParameterMap();
        // 获取传入的username
        String username = parameterMap.get("username")[0];

        User user = userService.getUserById(username);

        if (user == null) {
            return R.error("该用户不存在", null);
        } else {
            return R.success("该用户存在", null);
        }
    }

//    功能:传入username和password,插入用户信息
//    url示例:http://localhost:8090/insertUserByUsernameAndPassword
    @PostMapping("/insertUserByUsernameAndPassword")
    public R insertUserByUsernameAndPassword(HttpServletRequest httpServletRequest) {
        // 获取传入的username和password
        Map<String, String[]> parameterMap = httpServletRequest.getParameterMap();

        // 获取用户名和密码
        String username = parameterMap.get("username")[0];
        String password = parameterMap.get("password")[0];

        // 判断指定的用户名是否存在
        User user = userService.getUserById(username);

        if (user == null) {
            // 开始进行数据插入
            Boolean isInsertOk = userService.insertUserByUsernameAndPassword(username, password);
            if (isInsertOk) {
                // 成功
                return R.success("数据插入成功", null);
            } else {
                // 失败
                return R.error("插入数据失败", null);
            }
        } else {
            // 该用户已经存在了
            return R.success("该用户已经存在了", null);
        }
    }
}
