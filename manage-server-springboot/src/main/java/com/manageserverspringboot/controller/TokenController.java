package com.manageserverspringboot.controller;

import com.manageserverspringboot.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @description: token控制器
 * @author JJQ
 * @date 2024/10/11
 * @version 1.0
 */

@RestController
public class TokenController {

    @Autowired
    private TokenService tokenService;

//    获取token(默认)
//    示例url:http://localhost:8090/getToken
    @GetMapping("/getToken")
    public String getToken() {
        return tokenService.getToken();
    }
}
