package com.manageserverspringboot.controller;

import cn.dev33.satoken.secure.SaSecureUtil;
import cn.dev33.satoken.stp.SaTokenInfo;
import cn.dev33.satoken.stp.StpUtil;
import cn.dev33.satoken.util.SaResult;
import com.manageserverspringboot.config.WebSocketHandler;
import com.manageserverspringboot.entity.R;
import com.manageserverspringboot.entity.User;
import com.manageserverspringboot.service.TokenService;
import com.manageserverspringboot.service.UserService;
import com.manageserverspringboot.utils.ValidationUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.Map;
@Api(tags = "用户相关")// 用在控制器上
@Slf4j
@RestController
public class UserController {

    // 依赖注入
    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

//    websocket相关
    private final WebSocketHandler webSocketHandler;

    @Autowired
    public UserController(WebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }


    //    功能:获取全部的用户信息
//    url示例:http://localhost:8090/getAllUser
    @ApiOperation(value = "获取全部的用户信息")
    @GetMapping("/getAllUser")
    public R getAllUser() {
        log.info("有人调用我！");
        return R.success("成功获取全部的用户信息", userService.getAllUsers());
    }

//    功能:查询指定username的用户数据
//    url示例:http://localhost:8090/getUserById?username=jiang
    @ApiOperation(value = "查询指定username的用户数据")
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
    @ApiOperation(value = "传入username和password,插入用户信息")
    @PostMapping("/insertUserByUsernameAndPassword")
    public R insertUserByUsernameAndPassword(@RequestBody User u) {
        /**
        * @author Jiangjianqing
        * @date 2024/10/11 20:19
        * @description HttpServletRequest.getParameterMap()获取参数，这通常用于处理表单数据或URL查询参数
        */
        // 获取用户名和密码
        String username = u.getUsername();
        String password = SaSecureUtil.sha256(u.getPassword());// 加密(摘要加密) https://sa-token.cc/doc.html#/up/password-secure?id=%e6%91%98%e8%a6%81%e5%8a%a0%e5%af%86

        // 校验用户名密码是否合法
        if (!ValidationUtils.isUsernameAndPasswordValid(username) || !ValidationUtils.isUsernameAndPasswordValid(username)) {
            return R.error("用户名与密码只允许包含字母、数字、下划线，并且长度不为空且小于6的字符串", null);
        }

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
    @ApiOperation(value = "传入username和password 进行登录")
    @PostMapping("/login")
    public R login(@RequestBody User user) {
        log.info("login接口收到信息！参数:{}",user.toString());
        String username = user.getUsername();
        String password = user.getPassword();

        // 开始校验
        Boolean isLoginOk = userService.login(username, SaSecureUtil.sha256(password));

        if (isLoginOk) {
            // 生成token并发回前端
//            String token = tokenService.getToken();
            // 使用sa-token进行token的颁发
            StpUtil.login(username);
            // 广播信息
            try {
                webSocketHandler.broadcastMessage(username+"登录了！");
            } catch (IOException e) {
                e.printStackTrace();
            }
            // 将token返回前端
            SaTokenInfo tokenInfo = StpUtil.getTokenInfo();
            return R.success("用户名密码正确,登录成功！", SaResult.data(tokenInfo));
        } else {
            return R.error("用户名或密码错误!", null);
        }

    }
}
