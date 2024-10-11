package com.manageserverspringboot.controller;

import com.manageserverspringboot.entity.R;
import com.manageserverspringboot.entity.User;
import com.manageserverspringboot.service.TokenService;
import com.manageserverspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    // 依赖注入
    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

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
    public R insertUserByUsernameAndPassword(@RequestBody User u) {
        /**
        * @author Jiangjianqing
        * @date 2024/10/11 20:19
        * @description HttpServletRequest.getParameterMap()获取参数，这通常用于处理表单数据或URL查询参数
        */
        // 获取用户名和密码
        String username = u.getUsername();
        String password = u.getPassword();

        // 判断指定的用户名是否存在
        User user = userService.getUserById(username);

        if (user == null) {
            // 开始进行数据插入
            Boolean isInsertOk = userService.insertUserByUsernameAndPassword(username, password);
            if (isInsertOk) {
                // 成功
                return R.success("注册成功!", null);
            } else {
                // 失败
                return R.error("注册失败!", null);
            }
        } else {
            // 该用户已经存在了
            return R.error("该用户名已存在", null);
        }
    }

//     功能:传入username和password 进行登录
//     示例url:http://localhost:8090/login
    @GetMapping("/login")
    public R login(HttpServletRequest httpServletRequest) {
        Map<String, String[]> parameterMap = httpServletRequest.getParameterMap();
        // 获取用户名和密码
        String username = parameterMap.get("username")[0];
        String password = parameterMap.get("password")[0];

        // 开始校验
        Boolean isLoginOk = userService.login(username, password);

        if (isLoginOk) {
            // 生成token并发回前端
            String token = tokenService.getToken();
            return R.success("用户名密码正确,登录成功！", token);
        } else {
            return R.error("用户名或密码错误!", null);
        }

    }
}
