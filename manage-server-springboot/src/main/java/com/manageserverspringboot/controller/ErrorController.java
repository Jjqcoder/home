package com.manageserverspringboot.controller;

import com.manageserverspringboot.entity.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
* @author Jiangjianqing
* @date 2024/10/11 21:52
* @description 错误处理
*/

@Api(tags = "错误处理")
@RestController
public class ErrorController {

//    url示例:http://localhost:8090/tokenPostErr
    @ApiOperation(value = "用于处理token相关的post请求")
    @PostMapping("/tokenPostErr")// 注意 如果是从外部转发来的请求,请求方法(POST和GET)需要和原本的一样!!
    public R tokenPostErr() {
        return R.error("token过期了,请重新登录!", null);
    }

//        url示例:http://localhost:8090/tokenGetErr
    @ApiOperation(value = "用于处理token相关的get请求")
    @GetMapping("/tokenGetErr")// 注意 如果是从外部转发来的请求,请求方法(POST和GET)需要和原本的一样!!
    public R tokenGetErr() {
        return R.error("token过期了,请重新登录!", null);
    }

}
