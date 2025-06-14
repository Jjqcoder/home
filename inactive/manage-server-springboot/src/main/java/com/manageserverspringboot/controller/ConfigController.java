package com.manageserverspringboot.controller;

import com.manageserverspringboot.entity.R;
import com.manageserverspringboot.service.ConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
* @author Jiangjianqing
* @date 2024/10/29 20:58
* @description config控制器层
*/
@RestController
@Api(value = "config控制器")
@Slf4j(topic = "config控制器")
public class ConfigController {

    @Autowired
    private ConfigService configService;

    @ApiOperation(value = "获取全部的配置信息")
    @GetMapping("/getAllConfig")
    public R getAllConfig() {

        return R.success("成功拉取全部的配置信息", configService.getAllConfig());
    }

    @DeleteMapping("/delConfigByType")
    public R delConfigByType(String type) {
        boolean b = configService.delConfigByType(type);
        if (b) {
            return R.success("成功删除指定type的配置信息", null);
        }
        return R.error("删除指定type的配置信息失败", null);

    }
}
