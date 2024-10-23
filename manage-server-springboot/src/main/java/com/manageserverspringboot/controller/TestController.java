package com.manageserverspringboot.controller;

import cn.dev33.satoken.stp.StpUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
* @author Jiangjianqing
* @date 2024/10/22 21:28
* @description 用于测试
*/

@RestController
@Api(tags = "☕测试路由")
@RequestMapping("/test")
public class TestController {

    @ApiOperation(value = "测试get方法传参")
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "msg", required = false, defaultValue = "Default Message1") String msg1, @RequestParam(value = "msg2", required = false, defaultValue = "Default Message2")String msg2) {
        return msg1 + "" + msg2;
    }
    @ApiOperation(value = "sa-token登录简单测试", notes = "主要测试的内容为:用户登录之后分发token")
    @GetMapping("/login")
    public String saTokenTest(String username, String password) {
        if ("admin".equals(username) && "123".equals(password)) {
            StpUtil.login(username);
            return "登录成功";
        }
        return "登录失败";
    }

    @ApiOperation(value = "验证指定用户是否登录", notes = "传入一个用户名,判断其token是否合法")
    @GetMapping("/isLogin")
    public Boolean isLogin(String username) {
        return StpUtil.isLogin(username);
    }

}
