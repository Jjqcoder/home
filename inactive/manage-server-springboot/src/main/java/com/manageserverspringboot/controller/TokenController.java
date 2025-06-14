package com.manageserverspringboot.controller;

import com.manageserverspringboot.service.TokenService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @description: token控制器
 * @author JJQ
 * @date 2024/10/11
 * @version 1.0
 */
@Api(tags = "token相关")
@RestController
public class TokenController {

    @Autowired
    private TokenService tokenService;

//    获取token(默认)
//    示例url:http://localhost:8090/getToken
    @ApiOperation(value = "获取token")
    @GetMapping("/getToken")
    public String getToken() {
        return tokenService.getToken();
    }
    @ApiOperation(value = "校验指定的token是否合法")
    @GetMapping("/isTokenValid")
    public Boolean isTokenValid(String token) {
        return true;
    }
}
