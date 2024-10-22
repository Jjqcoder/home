package com.manageserverspringboot.controller;

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
@Api(tags = "测试路由")
@RequestMapping("/test")
public class TestController {

    @ApiOperation(value = "测试get方法传参")
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "msg", required = false, defaultValue = "Default Message1") String msg1, @RequestParam(value = "msg2", required = false, defaultValue = "Default Message2")String msg2) {
        return msg1 + "" + msg2;
    }
}
